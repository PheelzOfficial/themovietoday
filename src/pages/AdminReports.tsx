import React from 'react';
import { Badge } from '../components/Badge';

const AdminReports: React.FC = () => {
  const reports = [
    { title: 'Monthly Revenue', value: '$12,450', change: '+8.2%', detail: 'Cosmetic sales + Community donations' },
    { title: 'User Retention', value: '78%', change: '+2.1%', detail: '30-day active user metric' },
    { title: 'Avg. Watch Time', value: '2.4h', change: '-0.5%', detail: 'Per user per session' },
    { title: 'CDN Bandwidth', value: '450 TB', change: '+15%', detail: 'Current month utilization' },
  ];

  const topTitles = [
    { name: 'Neon Nights', views: '450k', completion: '88%' },
    { name: 'The Code Breakers', views: '320k', completion: '72%' },
    { name: 'Dusk till Dawn', views: '280k', completion: '91%' },
    { name: 'Galactic Horizon', views: '150k', completion: '65%' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">Analytics & Reports</h1>
        <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bold hover:bg-white/10 transition-colors">Export CSV</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {reports.map(report => (
          <div key={report.title} className="glass p-8 rounded-3xl group hover:border-primary/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm">{report.title}</h3>
              <Badge variant={report.change.startsWith('+') ? 'accent' : 'outline'} className="text-[10px]">{report.change}</Badge>
            </div>
            <p className="text-5xl font-black text-white mb-2">{report.value}</p>
            <p className="text-xs text-gray-400 italic">{report.detail}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 overflow-hidden">
        <h2 className="text-xl font-bold mb-8">Top Performing Content</h2>
        <div className="space-y-6">
          {topTitles.map(title => (
            <div key={title.name} className="flex flex-col gap-2">
              <div className="flex justify-between text-sm font-bold">
                <span>{title.name}</span>
                <span className="text-gray-400">{title.views} views</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: title.completion }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                <span>Waitlist</span>
                <span>{title.completion} Completion</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
