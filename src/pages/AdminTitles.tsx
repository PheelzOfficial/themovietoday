import React, { useState } from 'react';
import { TITLES } from '../data/mockData';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Badge } from '../components/Badge';
import { PlusIcon, InfoIcon } from '../components/Icons';

const AdminTitles: React.FC = () => {
  const [titles, setTitles] = useState(TITLES);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleDelete = (id: string) => {
    setTitles(titles.filter(t => t.id !== id));
  };

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">Manage Titles</h1>
        <Button onClick={() => setIsAddModalOpen(true)} className="gap-2 px-6">
          <PlusIcon size={20} />
          Add New Title
        </Button>
      </div>

      <div className="glass rounded-3xl overflow-hidden border-white/5">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-xs font-black uppercase tracking-widest text-gray-500">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Release</th>
              <th className="px-6 py-4">Rating</th>
              <th className="px-6 py-4">Trending</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {titles.map(title => (
              <tr key={title.id} className="hover:bg-white/2 hover:group transition-colors">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-6 rounded ${title.thumbnail} opacity-60 shrink-0`} />
                    <span className="font-bold">{title.name}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <Badge variant="outline" className="capitalize">{title.type}</Badge>
                </td>
                <td className="px-6 py-5 font-mono text-sm text-gray-400">{title.year}</td>
                <td className="px-6 py-5">
                  <Badge variant="secondary" className="bg-gray-800 border-none">{title.maturityRating}</Badge>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden w-16">
                      <div className="h-full bg-primary" style={{ width: `${title.trendingScore}%` }} />
                    </div>
                    <span className="text-xs font-mono">{title.trendingScore}%</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right space-x-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                    <InfoIcon size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(title.id)}
                    className="p-2 hover:bg-red-500/20 rounded-lg text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass p-8 rounded-3xl w-full max-w-lg animate-in zoom-in duration-300">
            <h2 className="text-2xl font-black mb-6 uppercase italic">Add Library Title</h2>
            <div className="space-y-4">
              <Input label="Title Name" placeholder="e.g. Cyberpunk 2088" />
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Content Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none">
                    <option>Movie</option>
                    <option>Series</option>
                  </select>
                </div>
                <Input label="Release Year" placeholder="2026" className="flex-1" />
              </div>
              <Input label="Description" placeholder="Plot summary..." />
              <div className="flex gap-4 pt-4">
                <Button className="flex-1" onClick={() => setIsAddModalOpen(false)}>Create Entry</Button>
                <Button variant="outline" className="flex-1 glass" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTitles;
