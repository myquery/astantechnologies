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
import config from '../config/index.json';

const MainHeroImage = () => {
    const { mainHero } = config;
  return (
    <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-900 overflow-hidden">
      {/* Dark blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900" />
      
      {/* Floating tech elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 filter blur-3xl" 
           style={{ animation: 'float 8s ease-in-out infinite' }} />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 filter blur-3xl" 
           style={{ animation: 'float 6s ease-in-out infinite 1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 rounded-full bg-cyan-500/10 filter blur-3xl" 
           style={{ animation: 'float 10s ease-in-out infinite 2s' }} />

      {/* SVG Container - replace this div with your actual SVG */}
      <div className="relative h-full w-full flex items-center justify-center p-8 md:p-12">
        <div className="w-full h-full flex items-center justify-center">
          {/* This is where your SVG will go */}
          <div className="w-[90%] h-[90%] flex items-center justify-center text-white">
            
            <img
          className="w-full h-full object-contain" /* Changed to object-contain */
          src={mainHero.img}
          alt="happy team image"
        />

          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px] opacity-20 z-0" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px] opacity-20 z-0" />

      {/* Animation styles */}
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