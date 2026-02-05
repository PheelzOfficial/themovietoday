import React, { useState } from 'react';
import { SearchIcon, InfoIcon, MenuIcon } from '../components/Icons';
import { Input } from '../components/Input';

const Help: React.FC = () => {
  const [q, setQ] = useState('');

  const faqs = [
    { q: 'How do I start watching?', a: 'Simply click "Browse" or pick a movie from the landing page. No login required!' },
    { q: 'Is there a mobile app?', a: 'TheMovieToday is a web-app works perfectly on all mobile browsers.' },
    { q: 'Can I request a movie?', a: 'Yes! Use our community portal to suggest titles you want to see.' },
    { q: 'How do I support the platform?', a: 'Visit your Account > Billing page to make a donation or buy cosmetics.' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-black mb-6 uppercase italic tracking-tighter">Help Center</h1>
        <p className="text-xl text-gray-400 mb-10">Search our knowledge base or browse common questions below.</p>
        <div className="relative">
          <SearchIcon size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-16 pr-8 text-lg focus:ring-2 ring-primary outline-none"
            placeholder="Search for help..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-primary">Q:</span> {faq.q}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-20 glass p-12 rounded-3xl text-center">
        <h2 className="text-2xl font-bold mb-4 italic uppercase">Still Need Help?</h2>
        <p className="text-gray-400 mb-8">Direct support is available for our registered community members.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-8 py-3 bg-primary rounded-lg font-bold">Contact Support</button>
          <button className="px-8 py-3 bg-white/5 rounded-lg font-bold border border-white/10">Community Discord</button>
        </div>
      </section>
    </div>
  );
};

export default Help;
