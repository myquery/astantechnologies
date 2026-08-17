import { NextSeo } from 'next-seo';
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <>
      <NextSeo
        title="Astan Technologies | Operational Technology Solutions"
        description="Astan identifies costly operational bottlenecks in growing businesses and designs the right technology solution to remove them."
        canonical="https://www.astantechnologies.com"
        openGraph={{
          url: 'https://www.astantechnologies.com',
          title: 'Astan Technologies | Operational Technology Solutions',
          description: 'Astan identifies operational bottlenecks and delivers the technology solution to remove them.',
          images: [{ url: '/assets/images/bkg.jpg', alt: 'Astan Technologies' }],
          siteName: 'Astan Technologies',
        }}
      />
      <div className="min-h-screen bg-brand-ink">
        <Navigation />
        <Hero />
      </div>
    </>
  );
};

export default Landing;
