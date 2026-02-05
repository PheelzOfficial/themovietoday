import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ChevronLeftIcon } from '../components/Icons';

const EditProfile: React.FC = () => {
  const { activeProfile, setActiveProfile } = useProfile();
  const navigate = useNavigate();
  const [name, setName] = useState(activeProfile?.name || '');
  const [isKids, setIsKids] = useState(activeProfile?.isKids || false);
  const [avatar, setAvatar] = useState(activeProfile?.avatar || 'bg-purple-500');

  const handleSave = () => {
    if (!name.trim()) return;
    setActiveProfile({ ...activeProfile!, name, isKids, avatar });
    navigate('/account');
  };

  const colors = [
    'bg-purple-500', 'bg-blue-500', 'bg-green-500',
    'bg-yellow-500', 'bg-red-500', 'bg-pink-500', 'bg-orange-500'
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen max-w-2xl">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ChevronLeftIcon size={20} />
        Back to Account
      </button>

      <h1 className="text-4xl font-black mb-12 uppercase italic tracking-tighter">Edit Profile</h1>

      <div className="glass p-8 rounded-3xl space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className={`w-32 h-32 rounded-2xl ${avatar} shadow-2xl relative group overflow-hidden`}>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
              <span className="text-xs font-bold uppercase">Change</span>
            </div>
          </div>

          <div className="flex-1 space-y-6 w-full">
            <Input
              label="Profile Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <p className="font-bold">Kids Profile?</p>
                <p className="text-xs text-gray-400">Restricts content to G/PG ratings</p>
              </div>
              <button
                onClick={() => setIsKids(!isKids)}
                className={`w-12 h-6 rounded-full transition-colors relative ${isKids ? 'bg-primary' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${isKids ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Choose Avatar Color</p>
          <div className="flex flex-wrap gap-4">
            {colors.map(c => (
              <button
                key={c}
                onClick={() => setAvatar(c)}
                className={`w-10 h-10 rounded-lg transition-all ${c} ${avatar === c ? 'ring-4 ring-white ring-offset-2 ring-offset-background scale-110' : 'opacity-60 hover:opacity-100'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4 border-t border-white/10">
          <Button onClick={handleSave} className="flex-1 h-12">Save Changes</Button>
          <Button variant="outline" className="flex-1 h-12 glass" onClick={() => navigate(-1)}>Cancel</Button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button variant="danger" className="bg-transparent border-red-900/40 text-red-900 hover:text-red-500 hover:bg-red-500/5">Delete Profile</Button>
      </div>
    </div>
  );
};

export default EditProfile;
