import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { PlayIcon } from '../components/Icons';
import { cn } from '../lib/utils'; // Keep cn in this file if imports fail or use local

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!email || !password) throw new Error('Please fill in all fields');
      await signIn(email);
      navigate('/profiles');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-md p-8 md:p-16 bg-black/80 rounded-xl shadow-2xl border border-white/10">
        <Link to="/" className="flex items-center justify-center gap-3 mb-8 group decoration-none">
          <div className="relative p-2 rounded-full border border-white/10 bg-zinc-900/50">
            <PlayIcon size={32} className="text-primary fill-primary/20" />
          </div>
          <div className="text-3xl font-black tracking-tighter italic leading-none">
            <span className="text-white">THEMOVIE</span>
            <span className="text-primary neon-text">TODAY</span>
          </div>
        </Link>

        <h2 className="text-3xl font-bold mb-8">Sign In</h2>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 p-3 rounded mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-gray-800 border-none focus:ring-primary"
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 bg-gray-800 border-none focus:ring-primary"
            placeholder="Enter your password"
          />

          <Button type="submit" className="w-full h-12 text-lg font-bold" isLoading={isLoading}>
            Sign In
          </Button>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-gray-700 border-none text-primary focus:ring-0" defaultChecked />
              Remember me
            </label>
            <Link to="/forgot" className="hover:text-white hover:underline">Need help?</Link>
          </div>
        </form>

        <div className="mt-16 text-gray-500">
          New to TheMovieToday?{' '}
          <Link to="/signup" className="text-white hover:underline font-bold">Sign up now</Link>.
        </div>

        <div className="mt-4 text-xs text-gray-600 center text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
