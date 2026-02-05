import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'accent';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(124,58,237,0.3)]',
            secondary: 'glass text-white hover:bg-white/10',
            ghost: 'bg-transparent text-white hover:bg-white/5',
            outline: 'bg-transparent border border-white/20 text-white hover:border-white/40',
            danger: 'bg-red-600 text-white hover:bg-red-700',
            accent: 'bg-accent text-white hover:bg-accent/90 shadow-[0_0_15px_rgba(34,197,94,0.3)]',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2',
            lg: 'px-6 py-3 text-lg',
            icon: 'p-2',
        };

        return (
            <button
                ref={ref}
                disabled={isLoading}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                ) : null}
                {children}
            </button>
        );
    }
);
