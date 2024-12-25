import React from 'react';
import { Award, Book, Briefcase } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-emerald-500 font-mono">{'>'} Career_History</h2>
        
        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Book className="w-5 h-5 text-emerald-500" />
            <h3 className="text-xl font-mono text-emerald-400">Education</h3>
          </div>
          <div className="space-y-4 pl-7">
            <div className="border-l-2 border-emerald-500/20 pl-4">
              <p className="text-emerald-400 font-mono">2018 - 2022</p>
              <h4 className="text-lg text-white">Bachelor of Science in Cybersecurity</h4>
              <p className="text-gray-400">Massachusetts Institute of Technology</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-emerald-500" />
            <h3 className="text-xl font-mono text-emerald-400">Experience</h3>
          </div>
          <div className="space-y-4 pl-7">
            <div className="border-l-2 border-emerald-500/20 pl-4">
              <p className="text-emerald-400 font-mono">2022 - Present</p>
              <h4 className="text-lg text-white">Senior Security Researcher</h4>
              <p className="text-gray-400">CyberGuard Solutions</p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Led penetration testing projects for Fortune 500 companies</li>
                <li>Developed automated security assessment tools</li>
                <li>Discovered and reported critical vulnerabilities</li>
              </ul>
            </div>
            <div className="border-l-2 border-emerald-500/20 pl-4">
              <p className="text-emerald-400 font-mono">2020 - 2022</p>
              <h4 className="text-lg text-white">Security Analyst</h4>
              <p className="text-gray-400">SecureNet Technologies</p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Performed vulnerability assessments and security audits</li>
                <li>Implemented security monitoring solutions</li>
                <li>Conducted security awareness training</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-emerald-500" />
            <h3 className="text-xl font-mono text-emerald-400">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 pl-7">
            <div className="bg-black/40 p-4 rounded-lg border border-emerald-500/20">
              <h4 className="text-white">OSCP - Offensive Security Certified Professional</h4>
              <p className="text-gray-400">Offensive Security</p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-emerald-500/20">
              <h4 className="text-white">CEH - Certified Ethical Hacker</h4>
              <p className="text-gray-400">EC-Council</p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-emerald-500/20">
              <h4 className="text-white">Security+ CE</h4>
              <p className="text-gray-400">CompTIA</p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-emerald-500/20">
              <h4 className="text-white">CISSP - Certified Information Systems Security Professional</h4>
              <p className="text-gray-400">ISC²</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;