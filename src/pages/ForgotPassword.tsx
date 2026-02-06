import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ChevronLeftIcon, PlayIcon } from '../components/Icons';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock send
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full glass p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center justify-center gap-2 mb-8 group decoration-none">
            <div className="relative p-2 rounded-full border border-white/10 bg-zinc-900/50">
              <PlayIcon size={24} className="text-primary fill-primary/20" />
            </div>
            <div className="text-2xl font-black tracking-tighter italic leading-none">
              <span className="text-white">THEMOVIE</span>
              <span className="text-primary neon-text">TODAY</span>
            </div>
          </Link>
          <h1 className="text-3xl font-black mb-4 uppercase italic">Reset Password</h1>
          <p className="text-gray-400">Enter your email and we'll send a magic link to get you back in.</p>
        </div>

        {isSent ? (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <p className="text-white font-bold">Magic link sent! Check your inbox.</p>
            <Link to="/signin" className="block text-primary hover:underline font-bold pt-4">Return to Sign In</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />
            <Button type="submit" className="w-full h-12 uppercase font-bold tracking-widest" isLoading={isLoading}>
              Send Magic Link
            </Button>
            <div className="text-center">
              <Link to="/signin" className="text-gray-500 hover:text-white text-sm font-bold flex items-center justify-center gap-2">
                <ChevronLeftIcon size={16} /> Back to Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
