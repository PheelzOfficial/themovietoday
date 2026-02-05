import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../types';
import { PlayIcon, InfoIcon } from './Icons';
import { Button } from './Button';
import { Badge } from './Badge';
import { cn } from '../lib/utils';

interface HeroProps {
    title: Title;
}

export const Hero: React.FC<HeroProps> = ({ title }) => {
    return (
        <div className="relative h-[80vh] md:h-[90vh] mb-5 w-full overflow-hidden">
            {/* Background Gradient / Image Placeholder */}
            <div className={cn("absolute inset-0 z-0 opacity-60", !title.thumbnail.startsWith('http') && !title.thumbnail.startsWith('/') ? title.thumbnail : "bg-gray-900")}>
                {(title.backdrop || title.thumbnail).startsWith('http') || (title.backdrop || title.thumbnail).startsWith('/') ? (
                    <img
                        src={title.backdrop || title.thumbnail}
                        alt={title.name}
                        className="w-full h-full object-cover"
                    />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-12 pt-20 max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                    <Badge variant="primary" className="uppercase tracking-widest text-xs px-3">{title.type === 'movie' ? 'Featured Movie' : 'Trending Series'}</Badge>
                    <span className="text-gray-400 font-bold">{title.year}</span>
                </div>

                <h1 className="text-5xl md:text-80 text-7xl font-black mb-6 tracking-tighter drop-shadow-2xl">
                    {title.name.toUpperCase()}
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl line-clamp-3 leading-relaxed">
                    {title.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <Link to={`/watch/${title.id}`}>
                        <Button size="sm" className="h-14 px-10 gap-2">
                            <PlayIcon size={24} />
                            Play Now
                        </Button>
                    </Link>
                    <Link to={`/title/${title.id}`}>
                        <Button variant="secondary" size="sm" className="h-14 px-10 gap-2 glass">
                            <InfoIcon size={24} />
                            More Info
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Hero Bottom Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
    );
};
