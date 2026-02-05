import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/" className="text-xl font-black tracking-tighter neon-text italic mb-6 inline-block">
                            THEMOVIETODAY
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
                    <p className="text-gray-600 text-xs">
                        © 2026 THEMOVIETODAY. All rights reserved. Built for creators.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/legal/terms" className="text-gray-600 hover:text-white text-xs">Terms</Link>
                        <Link to="/legal/privacy" className="text-gray-600 hover:text-white text-xs">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
