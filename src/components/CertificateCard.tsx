import React, { useState } from 'react';
import { Award } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  description: string;
  certificateUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ 
  title, 
  description, 
  certificateUrl 
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div 
      className="relative bg-black/60 p-6 rounded-lg border border-emerald-500/20 group"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <div className="flex items-center gap-3 mb-4">
        <Award className="w-5 h-5 text-emerald-400" />
        <h3 className="text-xl text-emerald-400 font-mono">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
      
      {/* Certificate Preview */}
      {showPreview && certificateUrl && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 w-72 bg-black rounded-lg shadow-xl border border-emerald-500/20 p-2">
          <img 
            src={certificateUrl} 
            alt={`${title} Certificate`}
            className="w-full h-auto rounded"
          />
        </div>
      )}
    </div>
  );
};