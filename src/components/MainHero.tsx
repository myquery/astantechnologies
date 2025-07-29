// import React from 'react';

// import config from '../config/index.json';

// const MainHero = () => {
//   const { mainHero } = config;
  
//   return (
//     <main className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <div className="mb-6">
//           <span className="px-4 py-2 bg-blue-100 text-primary text-sm font-medium rounded-full">
//             🚀 Transforming Businesses Since 2020
//           </span>
//         </div>
        
//         <h1 className="text-5xl font-bold text-gray-900 mb-6">
//           Your <span className="text-primary">Technology Partner</span>
//           <br />
//           for Business Solutions
//         </h1>
        
//         <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//           {mainHero.description}
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//           <a
//             href={mainHero.primaryAction.href}
//             className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
//           >
//             {mainHero.primaryAction.text}
//           </a>
//           <a
//             href={mainHero.secondaryAction.href}
//             className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
//           >
//             {mainHero.secondaryAction.text}
//           </a>
//         </div>
        
//         <div className="flex justify-center gap-12">
//           <div className="text-center">
//             <div className="text-2xl font-bold text-primary">50+</div>
//             <div className="text-sm text-gray-600">Projects</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-primary">99%</div>
//             <div className="text-sm text-gray-600">Success Rate</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-primary">24/7</div>
//             <div className="text-sm text-gray-600">Support</div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MainHero;


// import React from 'react';
// import config from '../config/index.json';

// const MainHero = () => {
//   const { mainHero } = config;
  
//   return (
//     <div className="relative pt-10 pb-20 sm:py-20 lg:pt-32 lg:pb-48">
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:max-w-2xl lg:w-full">
//           {/* Badge */}
//           <div className="inline-flex animate-fade-in mb-6">
//             <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
//               <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
//                 <circle cx={4} cy={4} r={3} />
//               </svg>
//               TRUSTED BY CRYPTO TRADERS SINCE 2020
//             </span>
//           </div>

//           {/* Main headline */}
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
//               Crypto Infrastructure
//             </span>{' '}
//             for the Digital Economy
//           </h1>
          
//           {/* Description */}
//           <p className="mt-6 text-lg leading-8 text-gray-300">
//             {mainHero.description}
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
//             <a
//               href={mainHero.primaryAction.href}
//               className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:from-cyan-600 hover:to-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 hover:shadow-lg"
//             >
//               {mainHero.primaryAction.text} <span aria-hidden="true">→</span>
//             </a>
//             <a
//               href={mainHero.secondaryAction.href}
//               className="rounded-xl px-6 py-4 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-800/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
//             >
//               <div className="flex items-center gap-x-2">
//                 <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//                 {mainHero.secondaryAction.text}
//               </div>
//             </a>
//           </div>

//           {/* Stats */}
//           <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
//             {[
//               { value: '50+', label: 'Blockchains', color: 'text-cyan-400' },
//               { value: '$2.1B+', label: 'Volume', color: 'text-purple-400' },
//               { value: '99.9%', label: 'Uptime', color: 'text-green-400' },
//               { value: '24/7', label: 'Security', color: 'text-yellow-400' }
//             ].map((stat, statIdx) => (
//               <div key={statIdx} className="text-center">
//                 <div className={`text-3xl font-bold ${stat.color} font-mono`}>{stat.value}</div>
//                 <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainHero;
import React from 'react';
import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  
  return (
    <div className="relative pt-10 pb-20 sm:py-20 lg:pt-32 lg:pb-48 bg-gradient-to-b from-gray-50 to-white">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-circuit-pattern" />
      
      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-gray-200 font-mono text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.15
            }}
          >
            {['<Blockchain/>', 'API', 'ERP', 'FinTech', 'Web3', 'AI', 'IoT', 'SaaS'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:w-full">
          {/* Tech badge */}
          <div className="inline-flex mb-6 animate-fade-in">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-200">
              <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-600 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
                <circle cx={4} cy={4} r={3} />
              </svg>
              INNOVATING SINCE 2020
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Business Technology
            </span>{' '}
            Meets Blockchain Solutions
          </h1>
          
          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Astan, we bridge enterprise technology with cutting-edge blockchain solutions. We automate operations, 
            integrate payment systems, and develop custom applications while providing secure crypto infrastructure 
            for modern financial needs.
          </p>

          {/* Service highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { icon: '⚙️', name: 'Business Automation' },
              { icon: '🔗', name: 'ERP Integration' },
              { icon: '💳', name: 'Payment Gateways' },
              { icon: '🔐', name: 'Crypto APIs' },
              { icon: '📱', name: 'App Development' },
              { icon: '⛓️', name: 'Blockchain Tech' }
            ].map((service, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <span className="text-lg">{service.icon}</span>
                {service.name}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <a
              href={mainHero.primaryAction.href}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:shadow-md"
            >
              {mainHero.primaryAction.text} →
            </a>
            <a
              href={mainHero.secondaryAction.href}
              className="rounded-lg px-6 py-4 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 transition-all duration-200 flex items-center gap-2"
            >
              <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {mainHero.secondaryAction.text}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: '100%', label: 'Secure Systems', color: 'text-green-600' },
              { value: '24/7', label: 'Tech Support', color: 'text-blue-600' },
              { value: '50+', label: 'Integrations', color: 'text-cyan-600' },
              { value: '99.9%', label: 'Uptime', color: 'text-purple-600' }
            ].map((stat, statIdx) => (
              <div key={statIdx} className="text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;