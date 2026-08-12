import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
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
                  'Astan Technologies is a software development company in Nigeria specialising in web apps, mobile apps, blockchain applications, ERP integrations, enterprise software, and business automation.',
                foundingDate: '2020',
                areaServed: ['Nigeria', 'Africa', 'Global'],
                email: 'dev@astantechnologies.com',
                sameAs: [
                  'https://www.linkedin.com/company/astantechnologies',
                  'https://twitter.com/astantech',
                ],
                knowsAbout: [
                  'Web application development',
                  'Mobile app development',
                  'Blockchain application development',
                  'ERP integration',
                  'CRM integration',
                  'Business process automation',
                  'Enterprise software',
                  'dApp development',
                  'Bitcoin application development',
                  'Shopify development',
                  'Custom software development Nigeria',
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Software Development Services',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web App Development' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blockchain App Development' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP Integration' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Software' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Automation' } },
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
                description: 'Software development company in Nigeria — web, mobile, blockchain, ERP, and enterprise applications.',
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
