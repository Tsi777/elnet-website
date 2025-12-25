import { Helmet } from 'react-helmet-async';
import { PageMetadata } from '../types';

interface SEOProps extends Partial<PageMetadata> {
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const fullTitle = title ? `ELNET Technologies - ${title}` : 'ELNET Technologies';
  const defaultDescription = 'ELNET Technologies - A value-driven, technology-enabled company with 40+ years of legacy building inclusive prosperity.';
  const defaultKeywords = [
    'ELNET Technologies',
    'Ethiopia',
    'Technology',
    'Mining',
    'Finance',
    'Manufacturing',
    'Healthcare',
    'Education',
    'Corporate Social Responsibility',
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={[...defaultKeywords, ...keywords].join(', ')} />
      )}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

