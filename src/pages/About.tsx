import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase italic neon-text">Our Story</h1>

      <div className="space-y-12">
        <section className="glass p-8 md:p-12 rounded-3xl bg-primary/5">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
            TheMovieToday was born from a simple idea: <span className="text-accent">premium entertainment shouldn't cost a fortune.</span> We believe that access to culture, cinema, and storytelling is a human right.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase italic tracking-widest text-primary">Independent</h2>
            <p className="text-gray-400">
              Unlike major conglomerates, we are entirely independent. Our platform is built by movie lovers, for movie lovers, funded by our community and innovative aesthetic cosmetics.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase italic tracking-widest text-accent">Transparent</h2>
            <p className="text-gray-400">
              Data privacy and transparent operations are our core pillars. We don't sell your data, and we don't lock content behind aggressive paywalls.
            </p>
          </div>
        </div>

        <section className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-black mb-6">JOIN THE REVOLUTION</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Help us shape the future of free streaming. Whether you're a viewer, filmmaker, or developer, there's a place for you at TMT.
          </p>
          <Link to="/browse">
            <Button size="lg" className="px-12 h-16 text-xl shadow-2xl">Start Watching</Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
