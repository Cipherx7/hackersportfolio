import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal: React.FC = () => {
  return (
    <div className="font-mono bg-black/90 rounded-lg p-4 shadow-lg shadow-emerald-500/20 border border-emerald-500/20">
      <div className="flex items-center gap-2 mb-4 border-b border-emerald-500/20 pb-2">
        <TerminalIcon className="w-4 h-4 text-emerald-500" />
        <span className="text-emerald-500 text-sm">alex@security ~ $</span>
      </div>
      <div className="space-y-2">
        <p className="text-emerald-500">./show_expertise.sh</p>
        <div className="pl-4 text-emerald-300">
          <p>{'>'} Security: Penetration Testing, Vulnerability Assessment</p>
          <p>{'>'} Tools: Burp Suite, Metasploit, Wireshark, Nmap</p>
          <p>{'>'} Programming: Python, Bash, PowerShell</p>
          <p>{'>'} Specialties: Web Security, Network Security, OSINT</p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
