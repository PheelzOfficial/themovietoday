import React, { useState } from 'react';
import { MOCK_USERS } from '../data/mockData';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { InfoIcon, SearchIcon } from '../components/Icons';

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState(MOCK_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSuspend = (id: string) => {
    // Mock suspension logic
    alert('User status toggled for id: ' + id);
  };

  const filteredUsers = users.filter(u => u.email.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">User Management</h1>
        <div className="relative w-full md:w-96">
          <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 outline-none focus:ring-2 ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <div key={user.id} className="glass p-6 rounded-2xl border-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                {user.email.charAt(0).toUpperCase()}
              </div>
              <Badge variant={user.role === 'admin' ? 'primary' : 'secondary'} className="uppercase">
                {user.role}
              </Badge>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg truncate mb-1">{user.email}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest">{user.profiles.length} Profiles connected</p>
            </div>

            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="flex-1 glass">View Info</Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                onClick={() => handleSuspend(user.id)}
              >
                Suspend
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No users found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
