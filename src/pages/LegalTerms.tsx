import React from 'react';

const LegalTerms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 pt-32 min-h-screen pb-20 max-w-4xl">
      <h1 className="text-4xl font-black mb-12 uppercase italic tracking-tighter">Terms of Service</h1>

      <div className="glass p-8 md:p-12 rounded-3xl space-y-8 text-gray-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">1. Acceptance of Terms</h2>
          <p>
            By accessing or using TheMovieToday, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">2. Free Access Policy</h2>
          <p>
            TheMovieToday provides streaming content at no monetary cost to users. We reserve the right to modify or discontinue any part of the service at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3. User Conduct</h2>
          <p>
            You agree not to attempt to scrape, reverse-engineer, or disrupt the platform. Any attempt to bypass security measures will result in an immediate ban of your IP and/or account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">4. Intellectual Property</h2>
          <p>
            All content available on the platform is either owned by us, licensed, or used within fair use guidelines for educational/critique purposes.
          </p>
        </section>

        <div className="pt-8 border-t border-white/5 text-sm italic">
          Last updated: February 5, 2026
        </div>
      </div>
    </div>
  );
};

export default LegalTerms;
