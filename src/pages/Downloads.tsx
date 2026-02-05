import React from 'react';
import { TITLES } from '../data/mockData';
import { Button } from '../components/Button';
import { DownloadIcon, PlayIcon } from '../components/Icons';
import { Link } from 'react-router-dom';

const Downloads: React.FC = () => {
  // Mock downloads: first 2 titles
  const downloadedTitles = TITLES.slice(0, 2);

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic neon-text flex items-center gap-4">
            <DownloadIcon size={40} />
            Downloads
          </h1>
          <p className="text-gray-400 mt-2">Available for offline viewing on this device.</p>
        </div>

        <div className="glass p-4 rounded-xl flex flex-col gap-2 min-w-[240px]">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Disk Space</span>
            <span className="text-white">12.4 GB / 128 GB</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent w-[10%]" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {downloadedTitles.map((title) => (
          <div key={title.id} className="glass p-4 rounded-xl flex items-center gap-6 group hover:bg-white/10 transition-colors">
            <div className={`w-36 md:w-48 aspect-video rounded-lg ${title.thumbnail} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <PlayIcon size={32} className="opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{title.name}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span>{title.year}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>{title.duration}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span className="text-accent font-bold">Downloaded</span>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end gap-2 pr-4">
              <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Size</span>
              <span className="text-white font-mono">1.2 GB</span>
            </div>

            <Link to={`/watch/${title.id}`}>
              <Button variant="secondary" size="icon" className="rounded-full h-12 w-12 glass">
                <PlayIcon size={24} />
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 border-2 border-dashed border-white/5 rounded-2xl text-center">
        <h3 className="text-xl font-bold mb-4">Want more to watch?</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Find something new and download it to watch anywhere, even without internet access.
        </p>
        <Link to="/browse">
          <Button variant="outline" className="glass px-8">Browse All Titles</Button>
        </Link>
      </div>
    </div>
  );
};

export default Downloads;
