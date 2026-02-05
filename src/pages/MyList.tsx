import React from 'react';
import { TITLES } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { ContentCard } from '../components/ContentCard';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const MyList: React.FC = () => {
  const { guestList, isAuthed, user } = useAuth();

  // In a real app, we'd fetch the user's list from an API or a more unified store
  // For this mock, we'll use guestList or a simplified user list logic
  const listIds = isAuthed ? (JSON.parse(localStorage.getItem(`myList_${user?.id}`) || '[]')) : guestList;
  const listItems = TITLES.filter(t => listIds.includes(t.id));

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic neon-text">
            My List
          </h1>
          <p className="text-gray-400 mt-2">Personalized collection for your profile.</p>
        </div>

        {!isAuthed && (
          <div className="glass p-4 rounded-xl flex items-center gap-6">
            <p className="text-sm text-gray-300 max-w-xs">
              Sign in to sync your list across all your devices and keep it forever.
            </p>
            <Link to="/signin">
              <Button size="sm">Sign In</Button>
            </Link>
          </div>
        )}
      </div>

      {listItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {listItems.map((title) => (
            <div key={title.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ContentCard title={title} />
              <p className="mt-3 font-bold truncate">{title.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-600">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Your list is empty</h2>
          <p className="text-gray-400 mb-8 max-w-sm">
            Add movies and series to your list to keep track of what you want to watch.
          </p>
          <Link to="/browse">
            <Button variant="primary" size="lg">Explore Titles</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyList;
