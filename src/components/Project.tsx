import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, tech, link }) => {
  return (
    <div className="bg-black/90 p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
      <h3 className="text-emerald-500 text-xl mb-2 font-mono">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-sm">
            {t}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  );
};

export default Project;