import React from 'react';
import { Hero } from '../components/Hero';
import { ContentRow } from '../components/ContentRow';
import { TITLES } from '../data/mockData';

const BrowseSeries: React.FC = () => {
  const series = TITLES.filter(t => t.type === 'series');
  const tech = series.filter(t => t.genres.includes('Tech'));
  const thriller = series.filter(t => t.genres.includes('Thriller'));
  const space = series.filter(t => t.genres.includes('Space'));
  const kids = series.filter(t => t.genres.includes('Kids'));

  return (
    <div className="pb-20">
      <Hero title={series[0]} />

      <div className="relative -mt-32 md:-mt-48 z-20 space-y-8">
        <ContentRow title="Tech & Hacking" items={tech} />
        <ContentRow title="Heart-Pounding Thrillers" items={thriller} />
        <ContentRow title="Deep Space Explorations" items={space} />
        <ContentRow title="Kids & Family Series" items={kids} />
        <ContentRow title="Recently Added Episodes" items={series.slice().reverse()} />
      </div>
    </div>
  );
};

export default BrowseSeries;
