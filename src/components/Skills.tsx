import React from 'react';
import Terminal from './Terminal';

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-emerald-500 font-mono">{'>'} Skills_And_Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-gray-300">
              Certified ethical hacker with expertise in network security, web application testing, and reverse engineering.
              Passionate about helping organizations strengthen their security posture through thorough penetration testing
              and security assessments.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>OSCP, CEH, and CompTIA Security+ certified</li>
              <li>5+ years of experience in penetration testing</li>
              <li>Expert in web application security and network analysis</li>
              <li>Proficient in Python scripting for security automation</li>
            </ul>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default Skills;