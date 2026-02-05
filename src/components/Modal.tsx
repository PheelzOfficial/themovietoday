import React, { useEffect } from 'react';
import { CrossIcon } from './Icons';
import { cn } from '../lib/utils';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className={cn(
                "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300",
                className
            )}>
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-transparent backdrop-blur-md border-b border-white/5">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                    >
                        <CrossIcon size={20} />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};
