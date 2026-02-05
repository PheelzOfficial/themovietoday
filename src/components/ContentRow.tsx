import React, { useRef } from 'react';
import { Title } from '../types';
import { ContentCard } from './ContentCard';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface ContentRowProps {
    title: string;
    items: Title[];
}

export const ContentRow: React.FC<ContentRowProps> = ({ title, items }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-4 py-3 group/row">
            <h2 className="text-xl md:text-2xl font-bold px-4 md:px-12 group-hover/row:text-primary transition-colors cursor-default">
                {title}
            </h2>

            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-black/50 opacity-0 group-hover/row:opacity-100 transition-opacity flex items-center justify-center hover:bg-black/70"
                >
                    <ChevronLeftIcon size={32} />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-4 snap-x snap-mandatory"
                >
                    {items.map((item) => (
                        <div key={item.id} className="snap-start">
                            <ContentCard title={item} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-black/50 opacity-0 group-hover/row:opacity-100 transition-opacity flex items-center justify-center hover:bg-black/70"
                >
                    <ChevronRightIcon size={32} />
                </button>
            </div>
        </div>
    );
};
