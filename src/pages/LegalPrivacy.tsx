import React from 'react';

const LegalPrivacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20 max-w-4xl">
      <h1 className="text-4xl font-black mb-12 uppercase italic tracking-tighter">Privacy Policy</h1>

      <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-400 leading-relaxed">
        <section className="bg-primary/5 p-6 rounded-xl border border-primary/10">
          <p className="text-white font-bold mb-2">TL;DR: We don't sell your data. At all.</p>
          <p className="text-sm">We only collect what is strictly necessary to provide the streaming service and persist your "My List" if you choose to create an account.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Data We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account Information (Email, password) if you register.</li>
            <li>Interaction Data (What you watch, what you add to your list).</li>
            <li>Technical Data (IP address, browser type) for security and CDN optimization.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">How We Use It</h2>
          <p>
            Your data is used to provide a personalized experience and for platform analytics. We do not use user data for targeted advertising from third-party networks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Cookies</h2>
          <p>
            We use essential cookies for authentication and platform settings persistence. No tracker cookies are used.
          </p>
        </section>

        <div className="pt-8 border-t border-white/5 text-sm italic">
          Last updated: February 5, 2026
        </div>
      </div>
    </div>
  );
};

export default LegalPrivacy;
