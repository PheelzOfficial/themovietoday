import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { TITLES } from '../data/mockData';
import { Input } from '../components/Input';
import { ContentCard } from '../components/ContentCard';
import { Badge } from '../components/Badge';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const [filter, setFilter] = useState<'all' | 'movie' | 'series'>('all');
  const [results, setResults] = useState(TITLES);

  // Filter Logic
  useEffect(() => {
    let filtered = TITLES;

    if (q) {
      filtered = filtered.filter(t => t.name.toLowerCase().includes(q.toLowerCase()));
    }

    if (filter !== 'all') {
      filtered = filtered.filter(t => t.type === filter);
    }

    setResults(filtered);
  }, [q, filter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value ? { q: e.target.value } : {});
  };

  const popularSearches = ['Sci-Fi', 'Action', 'Drama', 'Comedy', 'Thriller', 'Animation'];

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen">
      <div className="max-w-3xl mx-auto mb-12">
        <Input
          placeholder="Search movies, series, genres..."
          value={q}
          onChange={handleSearch}
          className="h-14 text-lg bg-white/10 border-white/20 focus:border-primary"
          autoFocus
        />

        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          {['all', 'movie', 'series'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-colors ${filter === type ? 'bg-primary text-white' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
            >
              {type === 'all' ? 'All Content' : type === 'movie' ? 'Movies' : 'TV Series'}
            </button>
          ))}
        </div>
      </div>

      {q === '' && filter === 'all' && (
        <div className="mb-16">
          <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-sm">Popular Genres</h3>
          <div className="flex flex-wrap gap-3">
            {popularSearches.map(genre => (
              <Link key={genre} to={`/browse?genre=${genre}`}>
                <Badge variant="secondary" className="px-4 py-2 text-sm hover:border-primary/50 hover:bg-white/10 transition-all cursor-pointer">
                  {genre}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {results.map(title => (
            <div key={title.id} className="hover:scale-105 transition-transform duration-300">
              <ContentCard title={title} />
              <p className="mt-2 text-sm font-bold truncate">{title.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No titles found for "{q}"</p>
          <p>Try searching for something else.</p>
        </div>
      )}
    </div>
  );
};

export default Search;
