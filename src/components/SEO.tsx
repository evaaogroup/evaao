import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
}

export function SEO({
  title = 'Evaao - Innovative Web, AI & Enterprise Solutions',
  description = 'Comprehensive technology solutions including web applications, AI & LLM models, gaming applications, ERP & CRM solutions, and mobile applications.',
  keywords = 'web development, AI solutions, mobile apps, gaming applications, ERP systems, CRM solutions, enterprise software, technology consulting',
  image = 'https://evaao.com/og-image.jpg',
  url = 'https://evaao.com',
  type = 'website',
  author = 'Evaao'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Update Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:type', type);

    // Update Twitter tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', image);
    updatePropertyTag('twitter:url', url);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type, author]);

  return null; // This component doesn't render anything
} 