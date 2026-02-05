import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { ChevronLeftIcon } from '../components/Icons';

const Billing: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [customAmount, setCustomAmount] = useState('');

  const donations = [5, 10, 25, 50, 100];

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ChevronLeftIcon size={20} />
        Back to Account
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic neon-text leading-none mb-4">
              Support the<br />Platform
            </h1>
            <p className="text-xl text-gray-400">Keep TheMovieToday free and independent.</p>
          </div>
          <Badge variant="accent" className="px-6 py-3 text-lg rounded-full">Streaming is 100% Free</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-3xl space-y-8">
            <h2 className="text-2xl font-bold">Choose a Donation Amount</h2>
            <div className="grid grid-cols-3 gap-4">
              {donations.map(amount => (
                <button
                  key={amount}
                  onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                  className={`h-16 rounded-xl font-mono text-xl transition-all border-2 ${selectedAmount === amount ? 'bg-primary border-primary text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'}`}
                >
                  ${amount}
                </button>
              ))}
              <div className="relative">
                <input
                  type="number"
                  placeholder="Custom"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                  className={`h-16 w-full rounded-xl bg-white/5 border-2 text-center font-mono text-xl focus:outline-none transition-all ${customAmount ? 'border-primary text-white' : 'border-white/10 text-gray-400'}`}
                />
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="w-full h-16 text-xl font-bold uppercase tracking-widest shadow-2xl">
                Donate {selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : 'Now'}
              </Button>
              <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
                By donating, you acknowledge that this is a voluntary contribution to support the platform infrastructure. No services or content are being purchased.
              </p>
            </div>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="glass p-6 rounded-2xl border-accent/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-accent">⭐</span>
                Donor Cosmetics
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Every donation unlocks a special "Supporter" badge next to your profile name and access to the "Neon Dusk" premium UI theme.
              </p>
              <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold ring-2 ring-accent">JS</div>
                <div>
                  <p className="font-bold text-sm">Supporter Badge Mockup</p>
                  <Badge variant="accent" className="mt-1">PLATINUM DONOR</Badge>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="font-bold mb-4 opacity-70">Where does the money go?</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex gap-3"><span className="text-primary">✦</span> High-performance bandwidth for 4K streaming.</li>
                <li className="flex gap-3"><span className="text-primary">✦</span> Storage for our growing library of independent titles.</li>
                <li className="flex gap-3"><span className="text-primary">✦</span> Developer coffee and server maintenance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
