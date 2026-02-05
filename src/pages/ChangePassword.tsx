import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ChevronLeftIcon } from '../components/Icons';

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) return;
    setSuccess(true);
    setTimeout(() => {
      navigate('/account');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen max-w-xl">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ChevronLeftIcon size={20} />
        Back to Account
      </button>

      <h1 className="text-4xl font-black mb-12 uppercase italic tracking-tighter">Change Password</h1>

      <div className="glass p-8 rounded-3xl">
        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Password Updated!</h2>
            <p className="text-gray-400">Your security settings have been saved.</p>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-6">
            <Input
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
            />
            <Input
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="At least 6 characters"
            />
            <Input
              label="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />

            <div className="pt-4">
              <Button type="submit" className="w-full h-12 uppercase tracking-widest font-bold">Update Password</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
