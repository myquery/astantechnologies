import { NextSeo } from 'next-seo';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

const keywords = [
  'operational technology solutions', 'business process automation', 'enterprise integration',
  'AI automation', 'custom software development', 'operational systems',
  'ERP integration', 'workflow automation', 'system integration',
  'operational bottleneck', 'technology solutions company', 'business operations technology',
];

export default function Home() {
  return (
    <>
      <NextSeo
        title="Astan Technologies | Operational Technology Solutions"
        description="Astan identifies costly operational bottlenecks in growing businesses and designs the right technology solution to remove them — combining software, AI, automation, integrations and existing platforms."
        canonical="https://www.astantechnologies.com"
        openGraph={{
          url: 'https://www.astantechnologies.com',
          title: 'Astan Technologies | Operational Technology Solutions',
          description: 'Astan identifies operational bottlenecks and delivers the technology solution to remove them — software, AI, automation, integrations or a combination.',
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
