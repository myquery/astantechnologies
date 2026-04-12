import React from 'react';
import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  
  return (
    <div className="relative pt-10 pb-20 sm:py-20 lg:pt-32 lg:pb-48 w-full">
      {/* Full-width background elements */}
      <div className="absolute inset-0 overflow-hidden w-full">
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-circuit-pattern bg-cover" />
        
        {/* Floating tech elements */}
        {[...Array(12)].map((_, i) => {
          const animationDuration = `${10 + Math.random() * 20}s`;
          const animationDelay = `${Math.random() * 5}s`;
          const size = `${Math.random() * 0.5 + 0.5}rem`;
          
          return (
            <div 
              key={i}
              className="absolute text-gray-200 font-mono text-sm pointer-events-none"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${animationDuration} ease-in-out ${animationDelay} infinite alternate`,
                fontSize: size,
                opacity: 0.15 + Math.random() * 0.1
              }}
            >
              {['<Blockchain/>', 'API', 'ERP', 'FinTech', 'Web3', 'AI', 'IoT', 'SaaS', 'Cloud', 'DevOps', 'Data', 'Security'][i]}
            </div>
          );
        })}
      </div>

      {/* Centered content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Tech badge */}
          <div className="inline-flex mb-6 animate-fade-in">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
              <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-600 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
                <circle cx={4} cy={4} r={3} />
              </svg>
              INNOVATING SINCE 2012
              <span className="ml-1.5 inline-flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Business Technology
            </span>{' '}
            <br className="sm:hidden" />
            Meets Blockchain Solutions
          </h1>
          
          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9 max-w-3xl mx-auto">
            At Astan, we bridge enterprise technology with cutting-edge blockchain solutions. We automate operations, 
            integrate payment systems, and develop custom applications while providing secure crypto infrastructure 
            for modern financial needs.
          </p>

          {/* Service highlights - centered grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 w-full max-w-2xl mx-auto">
            {[
              { icon: '⚙️', name: 'Business Automation' },
              { icon: '🔗', name: 'ERP Integration' },
              { icon: '💳', name: 'Payment Gateways' },
              { icon: '🔐', name: 'Crypto APIs' },
              { icon: '📱', name: 'App Development' },
              { icon: '⛓️', name: 'Blockchain Tech' }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-3 text-sm font-medium text-gray-700 bg-white/50 backdrop-blur-sm p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <span className="text-xl">{service.icon}</span>
                <span>{service.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons - centered */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href={mainHero.primaryAction.href}
              className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-lg group"
            >
              <span className="relative z-10 flex items-center">
                {mainHero.primaryAction.text}
                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a
              href={mainHero.secondaryAction.href}
              className="relative rounded-lg px-6 py-4 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 transition-all duration-300 hover:shadow-md flex items-center gap-2 bg-white/80 backdrop-blur-sm"
            >
              <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {mainHero.secondaryAction.text}
              <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none"></span>
            </a>
          </div>

          {/* Stats - centered */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 w-full max-w-4xl mx-auto">
            {[
              { value: '100%', label: 'Secure Systems', color: 'text-green-600' },
              { value: '24/7', label: 'Tech Support', color: 'text-blue-600' },
              { value: '50+', label: 'Integrations', color: 'text-cyan-600' },
              { value: '99.9%', label: 'Uptime', color: 'text-purple-600' }
            ].map((stat, statIdx) => (
              <div key={statIdx} className="text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default MainHero;