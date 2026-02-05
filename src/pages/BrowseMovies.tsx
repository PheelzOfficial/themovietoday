import React from 'react';
import { Hero } from '../components/Hero';
import { ContentRow } from '../components/ContentRow';
import { TITLES } from '../data/mockData';

const BrowseMovies: React.FC = () => {
  const movies = TITLES.filter(t => t.type === 'movie');
  const action = movies.filter(t => t.genres.includes('Action'));
  const scifi = movies.filter(t => t.genres.includes('Sci-Fi'));
  const horror = movies.filter(t => t.genres.includes('Horror'));
  const drama = movies.filter(t => t.genres.includes('Drama'));

  return (
    <div className="pb-20">
      <Hero title={movies[0]} />

      <div className="relative -mt-32 md:-mt-50 pt-20 z-20 space-y-8">
        <ContentRow title="Action Blockbusters" items={action} />
        <ContentRow title="Sci-Fi Adventures" items={scifi} />
        <ContentRow title="Spooky Favorites" items={horror} />
        <ContentRow title="Gripping Dramas" items={drama} />
        <ContentRow title="Top Movie Picks" items={movies.slice().reverse()} />
      </div>
    </div>
  );
};

export default BrowseMovies;
