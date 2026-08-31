import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale} data-theme="dark">
        <Head>
          {/* Prevent theme flash on load */}
          <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);})();` }} />
          {/* Google Search Console */}
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_VERIFICATION || ''} />

          {/* Bing Webmaster */}
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION || ''} />

          {/* Google Tag Manager */}
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`
          }} />

          {/* JSON-LD Organization Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Astan Technologies',
                legalName: 'Astan Technologies Nigeria Limited',
                url: 'https://www.astantechnologies.com',
                logo: 'https://www.astantechnologies.com/brand/astan-iconmark-white.svg',
                description:
                  'Astan Technologies identifies costly operational bottlenecks in growing businesses and designs the right technology solution to remove them — software, AI, automation, integrations, existing platforms and supporting technology.',
                foundingDate: '2020',
                areaServed: ['Nigeria', 'Africa', 'Global'],
                email: 'dev@astantechnologies.com',
                sameAs: [
                  'https://www.linkedin.com/company/astantechnologies',
                  'https://twitter.com/astantech',
                ],
                knowsAbout: [
                  'Operational technology solutions',
                  'Business process automation',
                  'Enterprise integration',
                  'AI automation',
                  'Custom software development',
                  'ERP integration',
                  'Workflow automation',
                  'System integration',
                  'Payment systems integration',
                  'Bitcoin application development',
                  'Blockchain application development',
                  'Asset tokenization',
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Operational Technology Solutions',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Operations & Enterprise Systems' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integration & Payments' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Automation' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Products' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Specialized Technology' } },
                  ],
                },
              }),
            }}
          />

          {/* JSON-LD WebSite Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Astan Technologies',
                url: 'https://www.astantechnologies.com',
                description: 'Astan identifies operational bottlenecks and delivers the technology solution — software, AI, automation, integrations or a combination.',
                publisher: {
                  '@type': 'Organization',
                  name: 'Astan Technologies',
                },
              }),
            }}
          />

          {/* Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });`
          }} />

          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8543295677573797"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          {/* GTM noscript fallback */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
