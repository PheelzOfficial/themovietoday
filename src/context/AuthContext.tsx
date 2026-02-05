import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, UserProfile } from '../types';
import { MOCK_USERS } from '../data/mockData';

interface AuthContextType {
    user: User | null;
    isAuthed: boolean;
    signIn: (email: string) => Promise<void>;
    signOut: () => void;
    guestList: string[];
    addToGuestList: (id: string) => void;
    removeFromGuestList: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    });

    const [guestList, setGuestList] = useState<string[]>(() => {
        const saved = localStorage.getItem('guestList');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem('guestList', JSON.stringify(guestList));
    }, [guestList]);

    const signIn = async (email: string) => {
        // Simulate API call
        const foundUser = MOCK_USERS.find(u => u.email === email) || {
            id: Math.random().toString(36).substr(2, 9),
            email,
            role: 'user' as UserRole,
            profiles: [{ id: 'gp1', name: 'User', avatar: 'bg-purple-500', isKids: false }]
        };

        setUser(foundUser);

        // Merge guest list on first login if needed (simplified)
        const savedMyList = localStorage.getItem(`myList_${foundUser.id}`);
        const currentMyList = savedMyList ? JSON.parse(savedMyList) : [];
        const merged = Array.from(new Set([...currentMyList, ...guestList]));
        localStorage.setItem(`myList_${foundUser.id}`, JSON.stringify(merged));
    };

    const signOut = () => {
        setUser(null);
    };

    const addToGuestList = (id: string) => {
        setGuestList(prev => Array.from(new Set([...prev, id])));
    };

    const removeFromGuestList = (id: string) => {
        setGuestList(prev => prev.filter(item => item !== id));
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthed: !!user,
            signIn,
            signOut,
            guestList,
            addToGuestList,
            removeFromGuestList
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
