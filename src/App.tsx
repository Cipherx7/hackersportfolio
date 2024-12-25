import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Resume from './components/Resume';
import Awards from './components/Awards';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Skills />
      <Awards />
      
      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-emerald-500 font-mono">{'>'} Security_Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Project
              title="Network Security Scanner"
              description="Advanced vulnerability scanner with automated reporting and remediation suggestions"
              tech={['Python', 'Nmap', 'OpenVAS', 'Docker']}
              link="#"
            />
            <Project
              title="Web Security Testing Framework"
              description="Custom-built web application security testing framework with API integration"
              tech={['Python', 'REST API', 'SQLMap', 'JWT']}
              link="#"
            />
            <Project
              title="Security Automation Suite"
              description="Automated security testing and compliance checking tools"
              tech={['Bash', 'Python', 'Docker', 'CI/CD']}
              link="#"
            />
            <Project
              title="Threat Intelligence Platform"
              description="Real-time threat detection and analysis platform"
              tech={['Python', 'ElasticSearch', 'MISP', 'API']}
              link="#"
            />
          </div>
        </div>
      </section>

      <Resume />
    </div>
  );
}

export default App;