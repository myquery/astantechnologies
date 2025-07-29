// import React from 'react';

// const Features = () => {
//   const web2Features = [
//     {
//       name: "User Authentication",
//       description: "Seamless email/password + OAuth integration with enterprise-grade security",
//       icon: "🔐"
//     },
//     {
//       name: "Admin Dashboard",
//       description: "Comprehensive analytics and user management with real-time insights",
//       icon: "📊"
//     },
//     {
//       name: "CRM Analytics",
//       description: "Advanced customer relationship management with behavioral tracking",
//       icon: "📈"
//     },
//     {
//       name: "Smart Notifications",
//       description: "AI-powered in-app notifications with personalized user engagement",
//       icon: "🔔"
//     }
//   ];

//   const web3Features = [
//     {
//       name: "Wallet Connect",
//       description: "Multi-wallet support: MetaMask, WalletConnect, Coinbase, and more",
//       icon: "🔗"
//     },
//     {
//       name: "Token-Gated Access",
//       description: "Exclusive content and features based on token holdings and NFT ownership",
//       icon: "🎫"
//     },
//     {
//       name: "On-Chain Identity",
//       description: "ENS and Lens Protocol integration for decentralized identity management",
//       icon: "🆔"
//     },
//     {
//       name: "DeFi Dashboard",
//       description: "Track earnings, staking rewards, and portfolio performance across protocols",
//       icon: "💎"
//     }
//   ];

//   return (
//     <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="features">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">
//             Bridging <span className="text-primary">Web2</span> & <span className="text-primary">Web3</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']">
//             Experience the future of digital platforms with our hybrid approach that combines traditional web functionality with cutting-edge blockchain technology.
//           </p>
//         </div>

//         {/* Web2 Features */}
//         <div className="mb-20">
//           <div className="flex items-center mb-8">
//             <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
//             <h3 className="text-2xl font-bold text-gray-900 mx-6 font-['Space_Grotesk']">Web2 Foundation</h3>
//             <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {web2Features.map((feature, index) => (
//               <div key={feature.name} className="group">
//                 <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
//                   <div className="text-3xl mb-4">{feature.icon}</div>
//                   <h4 className="text-lg font-semibold text-gray-900 mb-3 font-['Inter']">{feature.name}</h4>
//                   <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Web3 Features */}
//         <div>
//           <div className="flex items-center mb-8">
//             <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
//             <h3 className="text-2xl font-bold text-gray-900 mx-6 font-['Space_Grotesk']">Web3 Innovation</h3>
//             <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {web3Features.map((feature, index) => (
//               <div key={feature.name} className="group">
//                 <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
//                   <div className="text-3xl mb-4">{feature.icon}</div>
//                   <h4 className="text-lg font-semibold text-gray-900 mb-3 font-['Inter']">{feature.name}</h4>
//                   <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">Ready to Build the Future?</h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join thousands of users already experiencing the next generation of web applications.</p>
//             <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from 'react';

const Features = () => {
  const businessFeatures = [
    {
      name: "Enterprise Automation",
      description: "Streamline operations with AI-powered workflow automation and process optimization",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: "ERP Integration",
      description: "Seamless connectivity with SAP, Oracle, and Microsoft Dynamics for unified operations",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      name: "Payment Solutions",
      description: "Multi-currency processing with traditional and crypto payment gateway integration",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Data Analytics",
      description: "Real-time business intelligence dashboards with predictive analytics",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const blockchainFeatures = [
    {
      name: "Crypto Payments",
      description: "Secure processing of Bitcoin, Ethereum, and stablecoin transactions",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Smart Contracts",
      description: "Automated business logic execution with audit-ready blockchain contracts",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: "Asset Tokenization",
      description: "Digitization of physical assets for fractional ownership and trading",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      name: "Supply Chain Tracking",
      description: "Immutable product provenance and logistics monitoring",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-200 mb-4">
            ENTERPRISE SOLUTIONS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Business Technology
            </span>{' '}
            with Blockchain Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your operations with our integrated platform combining enterprise systems and decentralized technologies
          </p>
        </div>

        {/* Business Features */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <h3 className="text-2xl font-bold text-gray-900 mx-6">Core Business Systems</h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessFeatures.map((feature) => (
              <div key={feature.name} className="group">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 h-full hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <div className="mb-5">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blockchain Features */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <h3 className="text-2xl font-bold text-gray-900 mx-6">Blockchain Enhancements</h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blockchainFeatures.map((feature) => (
              <div key={feature.name} className="group">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 h-full hover:border-cyan-300 transition-all duration-300 hover:shadow-lg">
                  <div className="mb-5">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless System Integration</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our platform connects your existing business systems with blockchain technology for enhanced efficiency and new capabilities.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-md">
              Request Integration Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
