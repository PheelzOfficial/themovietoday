import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Views', value: '1.2M', trend: '+12%', color: 'text-primary' },
    { label: 'Active Streams', value: '4,289', trend: '+5%', color: 'text-accent' },
    { label: 'New Signups', value: '842', trend: '+18%', color: 'text-blue-400' },
    { label: 'Platform Rating', value: '4.8/5', trend: 'Stable', color: 'text-yellow-400' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <Badge variant="primary" className="mb-2 uppercase tracking-widest px-3">Staff Only</Badge>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Control Center</h1>
        </div>
        <div className="text-right text-sm text-gray-500">
          System Status: <span className="text-accent font-bold">OPERATIONAL</span><br />
          Last Audit: 14 mins ago
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map(stat => (
          <div key={stat.label} className="glass p-6 rounded-2xl border-white/5 hover:border-white/10 transition-all">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-baseline gap-3">
              <span className={`text-4xl font-black ${stat.color}`}>{stat.value}</span>
              <span className="text-xs font-bold opacity-60">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Simple Chart Mock */}
        <div className="glass p-8 rounded-3xl">
          <h2 className="text-xl font-bold mb-8">Engagement Trend</h2>
          <div className="h-64 flex items-end gap-2">
            {[40, 70, 45, 90, 65, 80, 50, 95, 75, 85, 60, 100].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div
                  className="w-full bg-primary/20 hover:bg-primary rounded-t transition-all duration-500"
                  style={{ height: `${h}%` }}
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Day {i + 1}: {h}k
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <span>Mon</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="glass p-8 rounded-3xl">
          <h2 className="text-xl font-bold mb-8">Security Log</h2>
          <div className="space-y-4">
            {[
              { user: 'admin@tmt.com', action: 'Modified Title ID: m1', time: '2m ago' },
              { user: 'staff_12', action: 'Suspended User: evil_bot', time: '18m ago' },
              { user: 'system', action: 'Daily Backup Completed', time: '44m ago' },
              { user: 'admin@tmt.com', action: 'Updated Global Metadata', time: '2h ago' },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-mono text-xs text-gray-400">{log.user}</span>
                </div>
                <span className="text-sm font-medium">{log.action}</span>
                <span className="text-[10px] text-gray-500 uppercase">{log.time}</span>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-6 text-primary hover:bg-primary/10">View Detailed Reports</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
