import React from 'react';
import { Title } from '../types';
import { TITLES } from '../data/mockData';
import { ContentCard } from '../components/ContentCard';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const Kids: React.FC = () => {
  const kidsTitles = TITLES.filter(t => t.genres.includes('Kids') || t.maturityRating === 'G');

  return (
    <div className="min-h-screen bg-[#0E1525] pb-20 pt-32">
      {/* Kids Header Overlay Style */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FFD700]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 tracking-tight drop-shadow-lg uppercase mb-2">
              KIDS <span className="text-blue-400">ZONE</span>
            </h1>
            <p className="text-xl text-blue-200/60 font-medium italic">Everything for the little ones! Safe and fun titles.</p>
          </div>
          <Link to="/browse">
            <Button size="lg" variant="secondary" className="rounded-full bg-white/5 border-2 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10">
              Exit Kids Mode
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {kidsTitles.map((title) => (
            <div key={title.id} className="group relative">
              <div className="transition-transform duration-300 hover:scale-105">
                <ContentCard title={title} />
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-lg text-blue-100">{title.name}</span>
                  <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] font-black">{title.maturityRating}</span>
                </div>
              </div>

              {/* Kids specific fun element */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rotate-12">
                <span className="text-lg">✨</span>
              </div>
            </div>
          ))}
        </div>

        {kidsTitles.length === 0 && (
          <div className="text-center py-32">
            <div className="text-9xl mb-8">🎈</div>
            <p className="text-2xl text-gray-500">No kids titles found right now.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kids;
