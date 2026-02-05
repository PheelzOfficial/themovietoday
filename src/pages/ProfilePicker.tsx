import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import { Button } from '../components/Button';
import { PlusIcon } from '../components/Icons';
import { cn } from '../lib/utils';

const ProfilePicker: React.FC = () => {
  const { profiles, setActiveProfile, activeProfile } = useProfile();
  const navigate = useNavigate();

  const handleSelect = (profile: any) => {
    setActiveProfile(profile);
    navigate('/browse');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase italic">
          Who's Watching?
        </h1>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => handleSelect(profile)}
              className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
            >
              <div className={cn(
                "w-24 h-24 md:w-32 md:h-32 rounded-lg relative overflow-hidden transition-all duration-300 ring-offset-4 ring-offset-background group-hover:ring-4 ring-primary",
                profile.avatar || "bg-gray-700",
                activeProfile?.id === profile.id && "ring-4 ring-primary"
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <span className="text-gray-400 font-bold group-hover:text-white transition-colors">
                {profile.name}
              </span>
            </button>
          ))}

          <button className="group flex flex-col items-center gap-4 transition-transform hover:scale-110">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-white/5 flex items-center justify-center border-2 border-dashed border-white/20 group-hover:border-primary group-hover:bg-white/10 transition-all">
              <PlusIcon size={48} className="text-white/20 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-gray-500 font-bold group-hover:text-white transition-colors">
              Add Profile
            </span>
          </button>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="px-12 uppercase tracking-widest font-bold glass"
            onClick={() => navigate('/browse')}
          >
            Manage Profiles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicker;
