import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Mugume Charity Foundation - Transforming Lives in Uganda',
  description = 'Mugume Charity Foundation uplifts vulnerable children and families in Uganda through education, healthcare, protection, and empowerment programs. Making a lasting difference since 2015.',
  type = 'website',
  name = 'Mugume Charity Foundation',
  imageUrl = '/lovable-uploads/ad43d508-5126-4d66-af8e-3e226feace4d.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['charity Uganda', 'children support', 'education Uganda', 'healthcare Uganda', 'child protection', 'family empowerment', 'nonprofit Uganda', 'vulnerable children', 'community development', 'donation Uganda'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://mugumecharity.org${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://mugumecharity.org${imageUrl}`;

  // Enhanced keywords for specific pages
  const enhancedKeywords = location.pathname.includes('/donate') 
    ? [
        ...keywords,
        'donate Uganda',
        'charity donation',
        'help children Uganda',
        'support education',
        'PayPal donation',
        'online giving',
        'humanitarian aid Uganda',
        'child sponsorship',
        'nonprofit donation'
      ]
    : location.pathname.includes('/volunteer')
    ? [
        ...keywords,
        'volunteer Uganda',
        'charity volunteer',
        'help communities',
        'volunteer opportunities',
        'community service Uganda',
        'humanitarian work',
        'volunteer abroad'
      ]
    : location.pathname.includes('/programs')
    ? [
        ...keywords,
        'education programs Uganda',
        'healthcare programs',
        'child protection services',
        'family empowerment',
        'community programs',
        'social services Uganda'
      ]
    : keywords;

  // Create base Organization JSON-LD structured data for charity
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': 'https://mugumecharity.org',
    name: 'Mugume Charity Foundation',
    alternateName: 'Mugume Charity',
    url: 'https://mugumecharity.org',
    logo: 'https://mugumecharity.org/lovable-uploads/ad43d508-5126-4d66-af8e-3e226feace4d.png',
    description: 'Transforming lives through hope, compassion, and opportunity in Uganda',
    foundingDate: '2015',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UG',
      addressRegion: 'Uganda'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+256788293790',
      email: 'mugumehamidu111@gmail.com',
      availableLanguage: ['English']
    },
    areaServed: {
      '@type': 'Country',
      name: 'Uganda'
    },
    knowsAbout: [
      'Child welfare',
      'Education support',
      'Healthcare assistance',
      'Community development',
      'Family empowerment'
    ],
    sameAs: [
      'https://www.mugumecharity.org'
    ],
    nonprofitStatus: 'NonprofitOrganization',
    missionCoveragePrioritiesPolicy: 'Supporting vulnerable children and families through comprehensive care programs'
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'Mugume Charity Foundation',
      url: 'https://mugumecharity.org'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mugume Charity Foundation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mugumecharity.org/lovable-uploads/bb6772a3-4cba-4b5a-9946-933ce3d01e31.png',
        width: 512,
        height: 512
      },
      url: 'https://mugumecharity.org'
    },
    description: description,
    keywords: enhancedKeywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  // Add FAQ structured data for charity-related questions
  const charityFAQData = location.pathname === '/' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I donate to Mugume Charity Foundation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can donate through our secure PayPal donation system, bank transfer, or mobile money. Visit our donate page for all available options and to make an immediate impact.'
        }
      },
      {
        '@type': 'Question',
        name: 'What programs does Mugume Charity Foundation offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive programs including education support, healthcare assistance, child protection services, and family empowerment initiatives to transform lives across Uganda.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I volunteer with Mugume Charity Foundation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We welcome volunteers who want to make a difference. You can help with program activities, fundraising, administrative support, or skill-based volunteering. Contact us to learn about current opportunities.'
        }
      }
    ]
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...enhancedKeywords, category.toLowerCase()].join(', ') 
    : enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Geo tags for Uganda */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.country" content="Uganda" />
      <meta name="geo.placename" content="Uganda" />
      
      {/* Charity specific meta tags */}
      <meta name="charity:registration" content="Non-profit organization" />
      <meta name="charity:location" content="Uganda" />
      <meta name="charity:focus" content="Children, Education, Healthcare, Community Development" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Mugume Charity Foundation" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://mugumecharity.org" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@mugumecharity" />
      <meta name="twitter:creator" content="@mugumecharity" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#166534" />
      <meta name="msapplication-TileColor" content="#166534" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {charityFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(charityFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
