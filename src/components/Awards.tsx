import React from 'react';
import CertificateCard from './CertificateCard';

const CERTIFICATES = [
  {
    title: 'First Place - Global CTF Championship',
    description: 'Achieved top position among 500+ participants in the international cybersecurity competition',
    certificateUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Security Researcher of the Year',
    description: 'Recognized for discovering critical vulnerabilities in major enterprise systems',
    certificateUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Bug Bounty Hall of Fame',
    description: 'Listed in multiple Fortune 500 companies\' security hall of fame for responsible disclosures',
    certificateUrl: 'https://images.unsplash.com/photo-1590087644862-d68cc1ef7c1c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'DEFCON Black Badge',
    description: 'Awarded the prestigious Black Badge for exceptional contributions to the security community',
    certificateUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
  },
];

const Awards: React.FC = () => {
  return (
    <section className="py-20 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-emerald-500 font-mono">{'>'} Honors_And_Awards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              description={cert.description}
              certificateUrl={cert.certificateUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;