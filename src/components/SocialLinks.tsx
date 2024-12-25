import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

interface SocialLinksProps {
  github: string;
  linkedin: string;
  email: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ github, linkedin, email }) => {
  return (
    <div className="flex gap-4">
      <a 
        href={github}
        className="text-emerald-500 hover:text-emerald-400 transition-colors"
        title="GitHub Profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6" />
      </a>
      <a 
        href={linkedin}
        className="text-emerald-500 hover:text-emerald-400 transition-colors"
        title="LinkedIn Profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a 
        href={`mailto:${email}`}
        className="text-emerald-500 hover:text-emerald-400 transition-colors"
        title="Email Me"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;