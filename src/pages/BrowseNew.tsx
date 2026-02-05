import React from 'react';
import { Hero } from '../components/Hero';
import { ContentRow } from '../components/ContentRow';
import { TITLES } from '../data/mockData';
import { Badge } from '../components/Badge';

const BrowseNew: React.FC = () => {
  const trending = TITLES.filter(t => t.trendingScore > 90);
  const top10 = TITLES.slice(0, 5); // Mock top 10
  const newest = TITLES.slice().reverse().slice(0, 5);

  return (
    <div className="pb-20">
      <Hero title={trending[0]} />

      <div className="relative -mt-32 md:-mt-48 z-20 space-y-12">
        {/* Top 10 with numbers */}
        <div className="space-y-4 py-8">
          <h2 className="text-xl md:text-2xl font-black px-4 md:px-12 uppercase italic tracking-tighter neon-text">
            Top 10 Today
          </h2>
          <div className="flex gap-8 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-4">
            {top10.map((item, i) => (
              <div key={item.id} className="flex items-end gap-2 group min-w-[240px]">
                <span className="text-8xl md:text-9xl font-black text-white/10 stroke-primary stroke-2 group-hover:text-primary/20 transition-colors select-none leading-none -mb-3">
                  {i + 1}
                </span>
                <div className="w-48 aspect-video glass-card rounded-lg overflow-hidden shrink-0">
                  <div className={`w-full h-full ${item.thumbnail} flex items-center justify-center`}>
                    <span className="text-[10px] font-bold text-center p-2 opacity-50">{item.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContentRow title="Highly Anticipated" items={trending} />

        <div className="px-4 md:px-12">
          <div className="glass p-12 rounded-3xl text-center bg-gradient-to-br from-primary/10 to-accent/5">
            <h3 className="text-3xl font-black mb-4">WANT TO BE THE FIRST TO KNOW?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join our newsletter to get alerted about secret screenings and new series before they hit the platform.
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input type="text" placeholder="your@email.com" className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4" />
              <Badge variant="primary" className="p-4 cursor-pointer">Notify Me</Badge>
            </div>
          </div>
        </div>

        <ContentRow title="Fresh Releases" items={newest} />
      </div>
    </div>
  );
};

export default BrowseNew;
