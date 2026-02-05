import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    setIsLoading(true);
    // Mock reset
    setTimeout(() => {
      setIsLoading(false);
      navigate('/signin');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full glass p-8 md:p-12 rounded-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black mb-4 uppercase italic">New Password</h1>
          <p className="text-gray-400">Choose a strong password to protect your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            required
          />
          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter password"
            required
          />
          <Button type="submit" className="w-full h-12 uppercase font-bold tracking-widest" isLoading={isLoading}>
            Update Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
