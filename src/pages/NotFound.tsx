import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      <div className="relative mb-12">
        <h1 className="text-[12rem] md:text-[20rem] font-black text-white/5 leading-none select-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Lost in Space</h2>
            <p className="text-xl text-gray-500 max-w-md mx-auto">
              The content you're looking for has moved out of orbit or never existed in this dimension.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 relative z-10">
        <Link to="/browse">
          <Button size="lg" className="px-12 h-16 text-xl tracking-widest uppercase font-bold shadow-2xl">Return to Base</Button>
        </Link>
        <Link to="/help">
          <Button variant="outline" size="lg" className="px-12 h-16 text-xl glass uppercase font-bold">Help Desk</Button>
        </Link>
      </div>

      {/* Decorative stars/neon blobs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[100px]" />
    </div>
  );
};

export default NotFound;
