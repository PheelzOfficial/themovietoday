import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon } from './Icons';

export const Footer: React.FC = () => {
    const links = [
        { title: 'Platform', items: ['Help Center', 'Account', 'Media Center', 'Investor Relations'] },
        { title: 'Content', items: ['Movies', 'Series', 'New & Trending', 'My List'] },
        { title: 'Legal', items: ['Terms of Use', 'Privacy Policy', 'Cookie Preferences', 'Corporate Information'] },
    ];

    return (
        <footer className="bg-background border-t border-white/5 py-12 md:py-20 mt-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 group decoration-none mb-6">
                            <div className="relative p-1.5 rounded-full border border-white/10 bg-zinc-900/50">
                                <PlayIcon size={20} className="text-primary fill-primary/20" />
                            </div>
                            <div className="text-xl font-black tracking-tighter italic leading-none">
                                <span className="text-white">THEMOVIE</span>
                                <span className="text-primary neon-text">TODAY</span>
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Streaming service offering movies, TV shows, and more on thousands of internet-connected devices.
                        </p>
                    </div>

                    {links.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-white font-bold mb-4">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.items.map((item) => (
                                    <li key={item}>
                                        <Link to="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-600 text-xs">
                            © 2026 TheMovieToday. All rights reserved. Built for creators.
                        </p>
                        <div className="flex items-center gap-2">
                            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDB Logo" className="h-8 w-8" />
                            <p className="text-gray-600/50 text-[10px]">
                                This product uses the TMDB API but is not endorsed or certified by TMDB.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <Link to="/legal/terms" className="text-gray-600 hover:text-white text-xs">Terms</Link>
                        <Link to="/legal/privacy" className="text-gray-600 hover:text-white text-xs">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
