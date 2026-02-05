import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../types';
import { PlayIcon, PlusIcon, InfoIcon, CheckIcon } from './Icons';
import { Button } from './Button';
import { Badge } from './Badge';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';

interface ContentCardProps {
    title: Title;
}

export const ContentCard: React.FC<ContentCardProps> = ({ title }) => {
    const { guestList, addToGuestList, removeFromGuestList, isAuthed, user } = useAuth();

    // Logic for My List would be more robust in a real app, here we check guestList for demo
    const isInList = guestList.includes(title.id);

    return (
        <div className="group relative aspect-video min-w-[200px] md:min-w-[280px] rounded-md overflow-hidden transition-all duration-300 hover:scale-110 hover:z-30">
            {/* Thumbnail */}
            <div className={cn("w-full h-full flex items-center justify-center text-white/50 relative", !title.thumbnail.startsWith('http') && !title.thumbnail.startsWith('/') ? title.thumbnail : "bg-gray-900")}>
                {(title.thumbnail.startsWith('http') || title.thumbnail.startsWith('/')) ? (
                    <img
                        src={title.thumbnail}
                        alt={title.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="font-bold text-lg opacity-40 group-hover:opacity-10 transition-opacity">{title.name}</span>
                )}
            </div>

            {/* Hover Info */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <div className="flex gap-2 mb-3">
                    <Link to={`/watch/${title.id}`}>
                        <Button size="icon" variant="primary" className="rounded-full w-8 h-8 p-0">
                            <PlayIcon size={16} />
                        </Button>
                    </Link>
                    <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full w-8 h-8 p-0"
                        onClick={() => isInList ? removeFromGuestList(title.id) : addToGuestList(title.id)}
                    >
                        {isInList ? <CheckIcon size={16} className="text-accent" /> : <PlusIcon size={16} />}
                    </Button>
                    <Link to={`/title/${title.id}`} className="ml-auto">
                        <Button size="icon" variant="secondary" className="rounded-full w-8 h-8 p-0">
                            <InfoIcon size={16} />
                        </Button>
                    </Link>
                </div>

                <h3 className="font-bold text-sm mb-1 truncate">{title.name}</h3>
                <div className="flex items-center gap-2">
                    <Badge variant="accent" className="text-[10px] py-0">{title.maturityRating}</Badge>
                    <span className="text-[10px] text-gray-400">{title.duration}</span>
                </div>
            </div>
        </div>
    );
};
