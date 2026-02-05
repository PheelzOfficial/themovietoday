import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Badge } from '../components/Badge';

const AdminSettings: React.FC = () => {
  const [siteName, setSiteName] = useState('TheMovieToday');
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20 max-w-4xl">
      <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-12">System Settings</h1>

      <div className="space-y-8">
        <section className="glass p-8 rounded-3xl">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">⚙️</span> General Config
          </h2>
          <div className="space-y-6">
            <Input
              label="Site Name / Branding"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="font-bold">Maintenance Mode</p>
                <p className="text-xs text-gray-400">Disable all public routes and show a landing message</p>
              </div>
              <button
                onClick={() => setMaintenanceMode(!maintenanceMode)}
                className={`w-14 h-8 rounded-full transition-all relative ${maintenanceMode ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${maintenanceMode ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </section>

        <section className="glass p-8 rounded-3xl">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">🔑</span> API & Security
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-white/5">
              <div>
                <p className="font-bold">Content API Key</p>
                <p className="text-xs font-mono text-gray-500">sk_live_v1_####################</p>
              </div>
              <Button size="sm" variant="outline" className="glass">Rotate Key</Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Staff IP Whitelist</p>
                <p className="text-xs text-gray-400 italic">2 IPs currently whitelisted</p>
              </div>
              <Button size="sm" variant="outline" className="glass">Edit List</Button>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-4">
          <Button variant="outline" className="glass px-8">Discard Changes</Button>
          <Button variant="primary" className="px-12 uppercase font-bold tracking-widest shadow-2xl">Save Settings</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
