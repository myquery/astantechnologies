import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              AstanTech
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-300 hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/profile" className="text-gray-300 hover:text-primary transition-colors">
              Profile
            </Link>
            <Link href="/tokens" className="text-gray-300 hover:text-primary transition-colors">
              Tokens
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-primary transition-colors">
              Docs
            </Link>
          </div>

          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};