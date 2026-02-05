import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { cn } from '../lib/utils'; // Keep cn in this file if imports fail or use local

const SignUp: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!email || !password) throw new Error('Please fill in all fields');
      if (password !== confirmPassword) throw new Error('Passwords do not match');
      if (password.length < 6) throw new Error('Password must be at least 6 characters');

      // Auto login after mock signup
      await signIn(email);
      navigate('/profiles');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-md p-8 md:p-12 bg-black/80 rounded-xl shadow-2xl border border-white/10">
        <Link to="/" className="block text-3xl font-black text-center mb-6 neon-text italic tracking-tighter">
          THEMOVIETODAY
        </Link>

        <h2 className="text-2xl font-bold mb-2">Create Account</h2>
        <p className="text-gray-400 mb-6 text-sm">Join millions of streamers. 100% Free.</p>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 p-3 rounded mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 bg-gray-800 border-none focus:ring-primary"
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 bg-gray-800 border-none focus:ring-primary"
            placeholder="Create a password"
          />
          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-10 bg-gray-800 border-none focus:ring-primary"
            placeholder="Confirm password"
          />

          <Button type="submit" className="w-full h-12 text-lg font-bold mt-4" variant="accent" isLoading={isLoading}>
            Sign Up Free
          </Button>
        </form>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Already have an account?{' '}
          <Link to="/signin" className="text-white hover:underline font-bold">Sign in</Link>.
        </div>
      </div>
    </div>
  );
};

export default SignUp;
