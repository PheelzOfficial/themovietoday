import React, { createContext, useContext, useState, useEffect } from 'react';

interface SettingsState {
    autoplay: boolean;
    quality: string;
    language: string;
    theme: 'neon-dusk' | 'classic';
}

interface SettingsContextType {
    settings: SettingsState;
    updateSettings: (newSettings: Partial<SettingsState>) => void;
    resetSettings: () => void;
}

const DEFAULT_SETTINGS: SettingsState = {
    autoplay: true,
    quality: '4K',
    language: 'English',
    theme: 'neon-dusk',
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<SettingsState>(() => {
        const saved = localStorage.getItem('appSettings');
        return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    });

    useEffect(() => {
        localStorage.setItem('appSettings', JSON.stringify(settings));
    }, [settings]);

    const updateSettings = (newSettings: Partial<SettingsState>) => {
        setSettings(prev => ({ ...prev, ...newSettings }));
    };

    const resetSettings = () => {
        setSettings(DEFAULT_SETTINGS);
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) throw new Error('useSettings must be used within SettingsProvider');
    return context;
};
