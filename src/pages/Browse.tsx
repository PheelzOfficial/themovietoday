import React from 'react';
import { Hero } from '../components/Hero';
import { ContentRow } from '../components/ContentRow';
import { TITLES } from '../data/mockData';

const Browse: React.FC = () => {
  const featured = TITLES.find(t => t.featured) || TITLES[0];
  const trending = TITLES.filter(t => t.trendingScore > 90);
  const movies = TITLES.filter(t => t.type === 'movie');
  const series = TITLES.filter(t => t.type === 'series');
  const sciFi = TITLES.filter(t => t.genres.includes('Sci-Fi'));
  const animation = TITLES.filter(t => t.genres.includes('Animation'));
  const horror = TITLES.filter(t => t.genres.includes('Horror'));
  const family = TITLES.filter(t => t.genres.includes('Family'));
  const top10 = TITLES.sort((a, b) => b.trendingScore - a.trendingScore).slice(0, 10);

  return (
    <div className="pb-20">
      <Hero title={featured} />

      <div className="relative -mt-32 md:-mt-50 pt-20 z-20 space-y-12">
        <ContentRow title="Today's Top 10" items={top10} />
        <ContentRow title="Trending Now" items={trending} />
        <ContentRow title="Epic Movies" items={movies} />
        <ContentRow title="Binge-worthy Series" items={series} />
        <ContentRow title="Cyberpunk & Sci-Fi" items={sciFi} />
        <ContentRow title="Family Favorites" items={family} />
        <ContentRow title="Spooky Night" items={horror} />
        <ContentRow title="Animation Station" items={animation} />
        <ContentRow title="Recently Added" items={[...TITLES].reverse()} />
      </div>
    </div>
  );
};

export default Browse;
