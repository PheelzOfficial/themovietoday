import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { ChevronLeftIcon } from '../components/Icons';
import { useSettings } from '../context/SettingsContext';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { settings, updateSettings, resetSettings } = useSettings();

  const Toggle = ({ enabled, setEnabled, label, sub }: any) => (
    <div className="flex items-center justify-between py-6 border-b border-white/5">
      <div>
        <p className="font-bold text-lg">{label}</p>
        <p className="text-sm text-gray-400">{sub}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-14 h-8 rounded-full transition-all relative ${enabled ? 'bg-primary shadow-[0_0_15px_rgba(124,58,237,0.4)]' : 'bg-gray-700'}`}
      >
        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${enabled ? 'left-7' : 'left-1'}`} />
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen max-w-3xl pb-20">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ChevronLeftIcon size={20} />
        Back
      </button>

      <h1 className="text-4xl font-black mb-12 uppercase italic tracking-tighter">Global Settings</h1>

      <div className="space-y-4">
        <section className="glass rounded-3xl overflow-hidden p-8">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Playback & Content</h2>

          <Toggle
            label="Autoplay Next Episode"
            sub="Next episode starts automatically after the current one ends."
            enabled={settings.autoplay}
            setEnabled={(val: boolean) => updateSettings({ autoplay: val })}
          />

          <div className="flex items-center justify-between py-6 border-b border-white/5">
            <div>
              <p className="font-bold text-lg">Default Streaming Quality</p>
              <p className="text-sm text-gray-400">Higher quality uses more data.</p>
            </div>
            <select
              value={settings.quality}
              onChange={(e) => updateSettings({ quality: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 outline-none focus:ring-2 ring-primary"
            >
              <option value="Auto">Auto (Best)</option>
              <option value="4K">Stunning 4G (4K)</option>
              <option value="1080p">High Definition (1080p)</option>
              <option value="720p">Standard (720p)</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-6">
            <div>
              <p className="font-bold text-lg">Language & Subtitles</p>
              <p className="text-sm text-gray-400">Preferred audio and caption language.</p>
            </div>
            <select
              value={settings.language}
              onChange={(e) => updateSettings({ language: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 outline-none focus:ring-2 ring-primary"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Japanese</option>
            </select>
          </div>
        </section>

        <section className="glass rounded-3xl p-8">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Device Management</h2>
          <div className="flex justify-between items-center py-4">
            <div>
              <p className="font-bold">Sync Settings Across Devices</p>
              <p className="text-xs text-gray-400 italic">Connected via CloudSync™</p>
            </div>
            <Button size="sm" variant="secondary" className="glass">Manage Devices</Button>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 bg-red-900/5 border-red-500/10">
          <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-6">Danger Zone</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">Reset Platform Data</p>
              <p className="text-sm text-gray-500">Clears your history, list, and downloads. Unrecoverable.</p>
            </div>
            <Button
              variant="danger"
              className="bg-red-950/40 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all"
              onClick={resetSettings}
            >
              Reset All
            </Button>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center text-gray-600 text-xs text-secondary-foreground font-medium flex-col items-center justify-center" style={{ opacity: 0.5 }}>
        Application Version: 0.1.0-alpha (Neon Dusk Build)
      </div>
    </div>
  );
};

export default Settings;
