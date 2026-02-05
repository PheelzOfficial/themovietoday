import React from 'react';
import { cn } from '../lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'outline';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className }) => {
    const variants = {
        primary: 'bg-primary/20 text-primary border-primary/30',
        secondary: 'bg-white/10 text-white border-white/20',
        accent: 'bg-accent/20 text-accent border-accent/30',
        outline: 'bg-transparent text-white border-white/20',
    };

    return (
        <span className={cn(
            'inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border',
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};
