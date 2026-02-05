import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { UserIcon, SettingsIcon, DownloadIcon } from '../components/Icons';

const Account: React.FC = () => {
  const { user, signOut } = useAuth();
  const { profiles } = useProfile();

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <h1 className="text-4xl font-black mb-12 tracking-tighter uppercase italic neon-text">Account Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Quick Links */}
        <div className="space-y-4">
          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <UserIcon size={32} />
              </div>
              <div>
                <h2 className="font-bold text-lg">{user?.email}</h2>
                <p className="text-gray-500 text-sm capitalize">Member since Feb 2026</p>
              </div>
            </div>
            <Button variant="outline" className="w-full glass mb-4" onClick={() => signOut()}>Sign Out</Button>
            <Link to="/settings">
              <Button variant="ghost" className="w-full text-gray-400 hover:text-white">Global App Settings</Button>
            </Link>
          </div>

          <div className="glass p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
            <h3 className="font-bold mb-2 text-accent">Support the Platform</h3>
            <p className="text-sm text-gray-400 mb-4">You're currently on the free-for-all plan. Consider a small contribution to keep us independent!</p>
            <Link to="/account/billing">
              <Button size="sm" variant="primary" className="bg-accent hover:bg-accent/80 border-none">Make a Donation</Button>
            </Link>
          </div>
        </div>

        {/* Middle/Right Column - Detailed Sections */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profiles Section */}
          <section className="glass p-8 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Profiles & Parental Controls</h2>
              <Link to="/profiles"><Button size="sm" variant="secondary">Manage All</Button></Link>
            </div>
            <div className="space-y-4">
              {profiles.map(p => (
                <div key={p.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg ${p.avatar}`} />
                    <div>
                      <p className="font-bold">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.isKids ? 'Kids Mode Active' : 'All Maturity Levels'}</p>
                    </div>
                  </div>
                  <Link to="/account/profile"><Button size="sm" variant="ghost">Edit</Button></Link>
                </div>
              ))}
            </div>
          </section>

          {/* Security Section */}
          <section className="glass p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-6">Security & Privacy</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <p className="font-medium text-gray-200">Password</p>
                  <p className="text-sm text-gray-500">Last changed 2 days ago</p>
                </div>
                <Link to="/account/password"><Button size="sm" variant="secondary">Change Password</Button></Link>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <p className="font-medium text-gray-200">Manage Devices</p>
                  <p className="text-sm text-gray-500">You are logged in on 3 devices</p>
                </div>
                <Button size="sm" variant="secondary">View List</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-200 text-red-400">Delete Account</p>
                  <p className="text-sm text-gray-500">Permanently remove all your data</p>
                </div>
                <Button size="sm" variant="danger" className="bg-red-900/40 border border-red-500/50 hover:bg-red-800/60">Delete</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Account;
