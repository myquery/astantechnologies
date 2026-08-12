import { NextSeo } from 'next-seo';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

const keywords = [
  // Core services
  'business automation solutions', 'custom ERP integration', 'enterprise app development',
  // Platforms
  'mobile app development Nigeria', 'web app development', 'desktop app development',
  // Web3
  'blockchain app development', 'dApp development', 'DeFi solutions Nigeria',
  // Long-tail
  'technology partner for startups', 'custom software development company Nigeria',
  'business process automation', 'CRM integration services',
];

export default function Home() {
  return (
    <>
      <NextSeo
        title="Astan Technologies | Business Automation & App Development Nigeria"
        description="Astan Technologies is your technology partner for business automation, ERP integrations, mobile, web, desktop app development, and blockchain solutions in Nigeria."
        canonical="https://www.astantechnologies.com"
        openGraph={{
          url: 'https://www.astantechnologies.com',
          title: 'Astan Technologies | Business Automation & App Development',
          description: 'Custom software, ERP integrations, and blockchain solutions for modern businesses.',
          images: [{ url: '/assets/images/bkg.jpg', alt: 'Astan Technologies' }],
          siteName: 'Astan Technologies',
        }}
        additionalMetaTags={[
          { name: 'keywords', content: keywords.join(', ') },
          { name: 'author', content: 'Astan Technologies' },
          { name: 'robots', content: 'index, follow' },
        ]}
      />
      <div className="min-h-screen bg-brand-ink">
        <Navigation />
        <Hero />
      </div>
    </>
  );
}
