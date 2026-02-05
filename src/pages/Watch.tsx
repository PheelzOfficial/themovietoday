import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TITLES, EPISODES } from '../data/mockData';
import { Button } from '../components/Button';
import { PlayIcon, ChevronLeftIcon, InfoIcon } from '../components/Icons';
import { cn } from '../lib/utils'; // Keep cn in this file if imports fail or use local

// Mock Video Player Component
const Watch: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const title = TITLES.find(t => t.id === id);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(80);

  // Auto-hide controls
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlaying && showControls) {
      timeout = setTimeout(() => setShowControls(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, showControls]);

  // Simulate progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(p => p + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  if (!title) return <div className="text-white text-center pt-20">Title not found</div>;

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background / Video Placeholder */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-1000", title.thumbnail, isPlaying ? "opacity-100" : "opacity-40")} />

      {/* Fake Video Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {isPlaying ? (
          <div className="text-white/5 font-black text-9xl uppercase tracking-tighter animate-pulse scale-150 select-none">
            STREAMING
          </div>
        ) : (
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-full">
            <PlayIcon size={64} className="ml-2 text-white" />
          </div>
        )}
      </div>

      {/* Start Overlay (if wanted) */}

      {/* Controls Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 transition-opacity duration-300 flex flex-col justify-between p-6 md:p-12",
        showControls ? "opacity-100" : "opacity-0 cursor-none"
      )}>
        {/* Top Bar */}
        <div className="flex items-start justify-between">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full text-white">
            <ChevronLeftIcon size={32} />
          </button>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-white drop-shadow-md">{title.name}</h2>
            {title.type === 'series' && <p className="text-gray-300">S1:E1 "Hello World"</p>}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="group relative h-1.5 bg-gray-600 rounded-full cursor-pointer" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            setProgress(pos * 100);
          }}>
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform"
              style={{ left: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                ) : (
                  <PlayIcon size={24} />
                )}
              </button>
              <button className="text-white hover:text-primary transition-colors -ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h4l5-5v14l-5-5H3z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
              </button>
              <div className="text-sm text-gray-300 font-mono">
                {Math.floor(progress * 0.45)}:00 / 45:00
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="text-white hover:text-primary transition-colors">
                <span className="font-bold text-sm">Next Ep</span>
              </button>
              <button className="text-white hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v18h-6M10 17l5-5-5-5v10z" /></svg>
              </button>
              <button className="text-white hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
