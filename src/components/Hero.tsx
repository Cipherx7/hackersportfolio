import React from 'react';
import { Shield, Download } from 'lucide-react';
import SocialLinks from './SocialLinks';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <GlitchText text="Alex Mitchell" className="text-5xl md:text-7xl font-bold mb-4" />
            <p className="text-2xl text-emerald-400 font-mono mb-4">{'>'} Ethical Hacker & Security Researcher</p>
            <p className="text-gray-300 mb-8 font-mono">
              {'>'} Specializing in penetration testing, vulnerability assessment, and secure code review
            </p>
            <div className="flex items-center gap-6 mb-8">
              <SocialLinks 
                github="https://github.com/alexmitchell-sec"
                linkedin="https://linkedin.com/in/alexmitchell-security"
                email="alex.mitchell@securitypro.com"
              />
              <a 
                href="/alex-mitchell-cv.pdf" 
                download
                className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-lg hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
                alt="Ethical Hacker at Work" 
                className="rounded-lg shadow-2xl border-2 border-emerald-500/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-black/90 px-4 py-2 rounded-lg border border-emerald-500/20">
                <Shield className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;