import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { useAuth } from './AuthContext';

interface ProfileContextType {
    activeProfile: UserProfile | null;
    setActiveProfile: (profile: UserProfile) => void;
    profiles: UserProfile[];
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const GUEST_PROFILE: UserProfile = {
    id: 'guest',
    name: 'Guest',
    avatar: 'bg-gray-600',
    isKids: false
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [activeProfile, setActiveProfileState] = useState<UserProfile | null>(() => {
        const saved = localStorage.getItem('activeProfile');
        return saved ? JSON.parse(saved) : null;
    });

    const profiles = user ? user.profiles : [GUEST_PROFILE];

    useEffect(() => {
        if (!activeProfile && profiles.length > 0) {
            setActiveProfileState(profiles[0]);
        }
    }, [profiles, activeProfile]);

    const setActiveProfile = (profile: UserProfile) => {
        setActiveProfileState(profile);
        localStorage.setItem('activeProfile', JSON.stringify(profile));
    };

    return (
        <ProfileContext.Provider value={{ activeProfile, setActiveProfile, profiles }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (context === undefined) throw new Error('useProfile must be used within a ProfileProvider');
    return context;
};
