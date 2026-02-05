import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PlayIcon } from '../components/Icons';

const Landing: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/40 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6 tracking-widest uppercase animate-pulse">
            The Future of Streaming
          </h1>
          <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none italic uppercase">
            Watch <span className="neon-text">Anything</span><br />
            Anytime. <span className="text-primary italic underline decoration-accent underline-offset-8">Free.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            No credit card. No subscriptions. No limits. Just pure entertainment delivered in stunning 4K.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/browse">
              <Button size="lg" className="h-16 px-12 text-xl gap-3 neon-border group">
                <PlayIcon size={24} className="group-hover:translate-x-1 transition-transform" />
                Start Watching Free
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="h-16 px-12 text-xl glass">
                Create Account
              </Button>
            </Link>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 md:px-12 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center">WHY THEMOVIETODAY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Free Forever', desc: 'Enjoy our entire library without ever paying a dime. Funded by premium cosmetics and community support.', icon: '💎' },
              { title: 'Watch Anywhere', desc: 'Stream on your phone, tablet, laptop, and TV without any extra cost.', icon: '📱' },
              { title: 'Create Profiles', desc: 'Personalize your experience with custom profiles, watchlists, and recommendations.', icon: '👥' },
            ].map(feature => (
              <div key={feature.title} className="glass p-8 rounded-2xl hover:border-primary/50 transition-colors group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Mock */}
      <section className="py-24 px-4 md:px-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-black mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-4">
            {[
              { q: "Is it really free?", a: "Yes, $0.00. We believe entertainment should be accessible to everyone." },
              { q: "Do I need an account?", a: "Nope. You can browse and watch instantly as a guest." },
              { q: "What movies do you have?", a: "Thousands of independent films, series, and curated classics." }
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">{item.q}</h4>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="text-4xl font-black neon-text mb-8 italic">THEMOVIETODAY</div>
        <div className="flex justify-center gap-8 mb-8 text-gray-500">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/help" className="hover:text-white">Help</Link>
          <Link to="/legal/privacy" className="hover:text-white">Privacy</Link>
        </div>
        <p className="text-gray-600">© 2026 TheMovieToday. Built for the future of entertainment.</p>
      </footer>
    </div>
  );
};

export default Landing;
