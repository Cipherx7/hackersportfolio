import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className="glitch-wrapper">
      <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 ${className}`}>
        {text}
      </h1>
    </div>
  );
};

export default GlitchText;