import React from 'react';
import { cn } from '../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && <label className="text-sm font-medium text-gray-300 ml-1">{label}</label>}
                <input
                    ref={ref}
                    className={cn(
                        'flex h-11 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background transition-all placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50',
                        error && 'border-red-500 focus:ring-red-500/50',
                        className
                    )}
                    {...props}
                />
                {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
            </div>
        );
    }
);
