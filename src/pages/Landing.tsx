import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PlayIcon } from '../components/Icons';

const Landing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-primary/30 text-white overflow-x-hidden">

      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image with Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop"
            alt="Cinematic Background"
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_#000000_100%]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-20">
          <div className="inline-block mb-4 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md animate-fade-in-up">
            <span className="text-primary tracking-widest text-sm font-bold uppercase">The Future of Streaming is Here</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl animate-fade-in-up delay-100">
            UNLIMITED <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-600">CINEMA.</span><br />
            Zero <span className="text-primary neon-text">Cost.</span>
          </h1>

          <p className="text-xl md:text-3xl text-zinc-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Experience the ultimate streaming platform where premium content meets <span className="text-white font-semibold">absolute freedom</span>. No credit cards. No subscriptions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up delay-300">
            <Link to="/browse">
              <Button size="lg" className="h-20 px-16 text-2xl gap-4 bg-primary text-black hover:bg-white hover:text-black transition-all duration-300 font-black tracking-widest uppercase hover:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                <PlayIcon size={32} className="fill-current" />
                Start Watching
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="h-20 px-16 text-2xl glass-card text-white hover:text-primary border-white/20 hover:border-primary font-bold tracking-widest uppercase backdrop-blur-xl">
                Create Account
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-zinc-900/50 border-y border-white/5 overflow-hidden">
        <div className="flex gap-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
          {Array(10).fill(["ACTION", "DRAMA", "SCI-FI", "THRILLER", "COMEDY", "HORROR", "ROMANCE"]).flat().map((genre, i) => (
            <span key={i} className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-wider">
              {genre}
            </span>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 md:px-12 relative bg-black">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] mb-4 uppercase">Why Choose Us</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">REDESIGNED FOR <br /><span className="text-zinc-600">IMMERSION</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Crystal Clear 4K', desc: 'Stream in breathtaking definition. Every detail, every pixel, exactly as the director intended.', icon: '✨' },
              { title: 'Sound That Surrounds', desc: 'Dolby Atmos supported audio for a theater-like experience right in your living room.', icon: '🔊' },
              { title: 'Global Access', desc: 'Watch from anywhere in the world. No VPNs needed. Just pure entertainment.', icon: '🌍' },
            ].map((feature, i) => (
              <div key={feature.title} className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-primary/50 transition-all duration-500">
                <div className="relative h-full bg-zinc-950/90 rounded-[22px] p-10 border border-white/5 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-lg text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-32 text-center border-t border-white/5 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="relative z-10 flex flex-col items-center gap-8 mb-12">
          <div className="relative p-6 rounded-full bg-black border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.15)] group hover:scale-110 transition-transform duration-500">
            <PlayIcon size={64} className="text-primary fill-primary/10" />
          </div>
          <div className="text-4xl md:text-5xl font-black tracking-tighter italic leading-none">
            <span className="text-white">THEMOVIE</span>
            <span className="text-primary neon-text">TODAY</span>
          </div>
        </div>
        <div className="flex justify-center gap-12 mb-12 text-zinc-500 font-medium tracking-wide">
          {['About', 'Help', 'Privacy', 'Terms', 'Contact'].map(item => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-primary hover:underline underline-offset-8 transition-all duration-300">
              {item}
            </Link>
          ))}
        </div>
        <p className="text-zinc-700 font-mono text-sm">© 2026 TheMovieToday. Designed for the Future.</p>
      </footer>
    </div>
  );
};

export default Landing;
