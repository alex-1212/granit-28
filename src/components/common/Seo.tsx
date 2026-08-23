import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://granit-svg.ru';
export const SITE_NAME = 'ООО «Гранит»';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/uploads/88fff896-717b-4e5d-89b9-497557d68736.png`;

interface SeoProps {
  title: string;
  description: string;
  /** Путь страницы, например "/products" или "/news/slug". По умолчанию "/" */
  path?: string;
  type?: 'website' | 'article';
  image?: string;
  /** Запрет индексации (auth, profile и т.п.) */
  noindex?: boolean;
  keywords?: string;
  /** Объект(ы) schema.org для JSON-LD */
  jsonLd?: Array<Record<string, unknown>>;
}

const toAbsoluteUrl = (value: string) =>
  value.startsWith('http') ? value : `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;

/**
 * Единая точка управления SEO-разметкой страницы:
 * title, description, canonical, Open Graph, Twitter Card и JSON-LD.
 */
export const Seo = ({
  title,
  description,
  path = '/',
  type = 'website',
  image,
  noindex = false,
  keywords,
  jsonLd,
}: SeoProps) => {
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;
  const ogImage = image ? toAbsoluteUrl(image) : DEFAULT_OG_IMAGE;
  const fullTitle = path === '/' ? title : `${title} — ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd?.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

/** Стандартные данные организации для JSON-LD */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Granit SVG',
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description:
    'Буровзрывные работы и собственное производство эмульсионных взрывчатых веществ (ЭВВ) на Дальнем Востоке',
  telephone: '+7 914-541-85-70',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Строительная, д. 28, офис 1',
    addressLocality: 'Хабаровск',
    addressRegion: 'Хабаровский край',
    postalCode: '680001',
    addressCountry: 'RU',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Дальний Восток России' },
    { '@type': 'AdministrativeArea', name: 'Республика Саха (Якутия)' },
    { '@type': 'AdministrativeArea', name: 'Камчатский край' },
    { '@type': 'AdministrativeArea', name: 'Магаданская область' },
    { '@type': 'AdministrativeArea', name: 'Хабаровский край' },
    { '@type': 'AdministrativeArea', name: 'Забайкальский край' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7 914-541-85-70',
    contactType: 'customer service',
    areaServed: 'RU',
    availableLanguage: ['Russian'],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${SITE_NAME} — Буровзрывные работы на Дальнем Востоке`,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'ru-RU',
};

/** Хлебные крошки для JSON-LD */
export const breadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
  })),
});
