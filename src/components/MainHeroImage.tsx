// import React from 'react';

// import config from '../config/index.json';

// const MainHeroImage = () => {
//   const { mainHero } = config;
//   return (
//     <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//       <img
//         className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
//         src={mainHero.img}
        
//         alt="happy team image"
//       />
//     </div>
//   );
// };

// export default MainHeroImage;


// import React from 'react';
// import config from '../config/index.json';

// const MainHeroImage = () => {
//   const { mainHero } = config;
//   return (
//     <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
//       <div className="w-[90%] h-[100%]"> {/* 40% size reduction container */}
//         <img
//           className="w-full h-full object-contain" /* Changed to object-contain */
//           src={mainHero.img}
//           alt="happy team image"
//         />
//       </div>
//     </div>
//   );
// };

// export default MainHeroImage;

import React from 'react';

const MainHeroImage = () => {
  return (
    <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20" />
      
      {/* Floating elements with inline animations */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 filter blur-3xl" 
           style={{ animation: 'float 8s ease-in-out infinite' }} />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 filter blur-3xl" 
           style={{ animation: 'float 6s ease-in-out infinite 1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 rounded-full bg-cyan-500/10 filter blur-3xl" 
           style={{ animation: 'float 10s ease-in-out infinite 2s' }} />

      <div className="relative h-full w-full flex items-center justify-center p-8 md:p-12">
        {/* Modern device mockup */}
        <div className="relative w-full max-w-2xl">
          {/* Device frame using Tailwind classes only */}
          <div className="relative z-10 mx-auto w-full rounded-[2rem] overflow-hidden border-8 border-gray-800 shadow-2xl">
            {/* App dashboard */}
            <div className="h-full w-full bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Hero section */}
              <div className="h-1/3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 relative p-6 flex flex-col justify-center">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white">Enterprise Dashboard</h3>
                  <p className="text-blue-200 mt-1">Blockchain-integrated business suite</p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 bg-blue-600/50 text-xs text-white rounded-full">Live</span>
                    <span className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full">v3.2.1</span>
                  </div>
                </div>
              </div>

              {/* Data visualization area */}
              <div className="h-2/3 p-4 flex flex-col">
                {/* Crypto price graph mock */}
                <div className="flex-1 bg-gray-800 rounded-xl mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                  <div className="relative z-10 p-4 h-full flex flex-col">
                    <div className="flex justify-between text-white">
                      <div>
                        <div className="text-sm text-gray-400">$HOME Token</div>
                        <div className="text-xl font-bold">$4.32</div>
                      </div>
                      <span className="text-green-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                        </svg>
                        +8.2%
                      </span>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full h-24 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Live price chart</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "1.2M", label: "Users" },
                    { value: "$4.8B", label: "Volume" },
                    { value: "98%", label: "Uptime" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-2 text-center border border-gray-700/50">
                      <div className="text-white font-medium">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px] opacity-20 z-0" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px] opacity-20 z-0" />
        </div>
      </div>

      {/* Add this to your global CSS or style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default MainHeroImage;