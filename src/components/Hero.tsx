import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Web3 Native
          <br />
          Platform
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your digital presence with our crypto-native platform that bridges Web2 and Web3 seamlessly
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <ConnectButton />
          <Link 
            href="/dashboard"
            className="px-8 py-3 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors border border-dark-700"
          >
            Explore Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary text-xl">🔗</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Multi-Chain Support</h3>
            <p className="text-gray-400">Connect to Ethereum, Polygon, Optimism, and Arbitrum</p>
          </div>

          <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary text-xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Trustless</h3>
            <p className="text-gray-400">Built with security-first principles and open-source ethos</p>
          </div>

          <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary text-xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Optimized for speed with modern Web3 infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};