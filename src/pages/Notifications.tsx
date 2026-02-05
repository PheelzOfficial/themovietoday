import React from 'react';
import { NOTIFICATIONS } from '../data/mockData';
import { BellIcon, InfoIcon } from '../components/Icons';
import { Badge } from '../components/Badge';
import { cn } from '../lib/utils';

const Notifications: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic neon-text flex items-center gap-4">
            <BellIcon size={40} />
            Notifications
          </h1>
          <p className="text-gray-400 mt-2">Latest updates, releases, and recommendations.</p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold hover:bg-white/20 transition-colors">Mark all as read</button>
          <button className="px-4 py-2 bg-white/5 rounded-lg text-sm font-bold hover:bg-white/10 transition-colors">Settings</button>
        </div>
      </div>

      <div className="max-w-4xl space-y-4">
        {NOTIFICATIONS.length > 0 ? NOTIFICATIONS.map((notif) => (
          <div key={notif.id} className={cn(
            "p-6 rounded-2xl border transition-all hover:bg-white/5 group",
            notif.read ? "bg-white/2 border-white/5 grayscale-[0.5]" : "bg-primary/5 border-primary/20 shadow-[0_0_20px_rgba(124,58,237,0.05)]"
          )}>
            <div className="flex gap-6 items-start">
              <div className={cn(
                "p-3 rounded-xl",
                notif.type === 'new_release' ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
              )}>
                {notif.type === 'new_release' ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20L12 2z" /></svg> : <InfoIcon size={24} />}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{notif.title}</h3>
                  <span className="text-xs text-gray-500 font-mono">
                    {new Date(notif.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{notif.body}</p>

                <div className="flex items-center gap-4">
                  <Badge variant={notif.type === 'new_release' ? 'accent' : 'primary'} className="uppercase text-[10px]">
                    {notif.type.replace('_', ' ')}
                  </Badge>
                  {!notif.read && <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />}
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 bg-white/2 rounded-3xl border border-white/5">
            <BellIcon size={48} className="mx-auto text-gray-700 mb-4" />
            <p className="text-gray-500">No new notifications.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
