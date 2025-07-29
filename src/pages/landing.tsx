import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Web3Explainer } from '../components/Web3Explainer';
import { CTA } from '../components/CTA';
import { Navigation } from '../components/Navigation';

const App = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navigation />
      <Hero />
      <Web3Explainer />
      <Features />
      <CTA />
    </div>
  );
};

export default App;