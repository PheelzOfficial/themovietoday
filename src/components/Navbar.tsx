import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';
import { SearchIcon, BellIcon, MenuIcon, CrossIcon, PlayIcon } from './Icons';
import { Button } from './Button';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
    const { isAuthed, signOut } = useAuth();
    const { activeProfile } = useProfile();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Browse', path: '/browse' },
        { label: 'Movies', path: '/browse/movies' },
        { label: 'Series', path: '/browse/series' },
        { label: 'New', path: '/browse/new' },
        { label: 'My List', path: '/my-list' },
    ];

    return (
        <nav className={cn(
            'fixed top-0 w-full z-40 transition-all duration-300',
            isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        )}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <Link to="/" className="flex items-center gap-2 group decoration-none">
                        <div className="relative">
                            <PlayIcon size={28} className="text-primary fill-primary/20 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-2xl font-black tracking-tighter italic leading-none">
                            <span className="text-white group-hover:text-gray-200 transition-colors">THEMOVIE</span>
                            <span className="text-primary neon-text">TODAY</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'text-sm transition-colors hover:text-primary',
                                    location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-300'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    <Link to="/search" className="p-2 text-gray-300 hover:text-white transition-colors">
                        <SearchIcon size={20} />
                    </Link>

                    <Link to="/notifications" className="p-2 text-gray-300 hover:text-white transition-colors relative">
                        <BellIcon size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                    </Link>

                    <div className="hidden sm:flex items-center gap-4">
                        {isAuthed ? (
                            <Link to="/profiles" className="flex items-center gap-2 group">
                                <div className={cn(
                                    'w-8 h-8 rounded-md group-hover:ring-2 ring-primary transition-all',
                                    activeProfile?.avatar || 'bg-primary'
                                )} />
                            </Link>
                        ) : (
                            <Button onClick={() => window.location.href = '/signin'} variant="primary" size="sm">
                                Sign In
                            </Button>
                        )}
                    </div>

                    <button
                        className="lg:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <CrossIcon size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-background border-t border-white/5 p-4 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col gap-4">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    'text-lg py-2',
                                    location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-300'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {!isAuthed && (
                            <Button onClick={() => window.location.href = '/signin'} className="w-full">
                                Sign In
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};
