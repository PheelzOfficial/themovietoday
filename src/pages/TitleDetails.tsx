import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TITLES, EPISODES } from '../data/mockData';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { PlayIcon, PlusIcon, CheckIcon } from '../components/Icons';
import { ContentRow } from '../components/ContentRow';
import { useAuth } from '../context/AuthContext';

const TitleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const title = TITLES.find(t => t.id === id);
  const { guestList, addToGuestList, removeFromGuestList } = useAuth();
  const [selectedSeason, setSelectedSeason] = useState(1);

  if (!title) return <div className="pt-32 text-center text-white">Title not found</div>;

  const isInList = guestList.includes(title.id);
  const episodes = EPISODES.filter(e => e.titleId === title.id && e.season === selectedSeason);
  const similarTitles = TITLES.filter(t => t.genres.some(g => title.genres.includes(g)) && t.id !== title.id);

  return (
    <div className="pb-20">
      {/* Detail Banner */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <div className={cn("absolute inset-0 z-0 opacity-50", title.thumbnail)} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end px-4 md:px-12 pb-12 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">{title.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-bold">{title.trendingScore}% Match</span>
            <span>{title.year}</span>
            <Badge variant="outline">{title.maturityRating}</Badge>
            <span>{title.duration}</span>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link to={`/watch/${title.id}`}>
              <Button size="lg" className="px-10 gap-2">
                <PlayIcon size={20} />
                Play
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="px-6 glass"
              onClick={() => isInList ? removeFromGuestList(title.id) : addToGuestList(title.id)}
            >
              {isInList ? <CheckIcon size={20} className="text-accent mr-2" /> : <PlusIcon size={20} className="mr-2" />}
              {isInList ? 'In My List' : 'Add to My List'}
            </Button>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {title.description}
          </p>
        </div>
      </div>

      <div className="px-4 md:px-12 mt-12 space-y-16">
        <section>
          <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-sm">Cast</h3>
          <p className="text-white text-lg">{title.cast.join(', ')}</p>
        </section>

        {title.type === 'series' && (
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-3xl font-bold">Episodes</h2>
              <select
                className="bg-white/5 border border-white/20 rounded px-4 py-2 focus:ring-2 ring-primary outline-none"
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(Number(e.target.value))}
              >
                <option value={1}>Season 1</option>
                <option value={2}>Season 2</option>
              </select>
            </div>

            <div className="space-y-4">
              {episodes.length > 0 ? episodes.map(ep => (
                <div key={ep.id} className="flex flex-col md:flex-row gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/10">
                  <div className="w-full md:w-64 aspect-video bg-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                    <PlayIcon size={40} className="opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-bold">{ep.episodeNumber}. {ep.name}</h4>
                      <span className="text-gray-500 text-sm">{ep.duration}</span>
                    </div>
                    <p className="text-gray-400 line-clamp-2">{ep.synopsis}</p>
                  </div>
                </div>
              )) : (
                <p className="text-gray-500 py-10">More episodes coming soon for {title.name}.</p>
              )}
            </div>
          </section>
        )}

        {similarTitles.length > 0 && (
          <ContentRow title="More Like This" items={similarTitles} />
        )}
      </div>
    </div>
  );
};

// Helper for cn in this file
const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default TitleDetails;
