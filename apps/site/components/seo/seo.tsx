import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export function Seo() {
  const { pathname = '', locale = 'en' } = useRouter();

  const description =
    locale === 'en'
      ? `Hello! I'm a Junior Front-end developer strongly
focused on React/React Native apps development.`
      : `Hej! Jestem Junior Front-end developerem tworzącym aplikacje za pomocą React i React Native.`;

  return (
    <NextSeo
      title="Karol Binkowski | Front-end developer"
      description={description}
      canonical={`https://karolbinkowski.me/en/${pathname}`}
      languageAlternates={[
        { hrefLang: 'pl', href: `https://karolbinkowski.me/pl/${pathname}` },
        { hrefLang: 'en', href: `https://karolbinkowski.me/en/${pathname}` },
      ]}
      themeColor="#818cf8"
      openGraph={{
        url: 'https://karolbinkowski.me',
        type: 'website',
        title: 'Karol Binkowski | Front-end developer',
        description: description,
        images: [
          {
            url: 'https://karolbinkowski.me/images/avatars/KarolBinkowski.png',
            width: 1000,
            height: 1000,
            alt: 'Karol Binkowski | Front-end developer',
            type: 'image/png',
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@grzywn',
        site: '@grzywn',
      }}
      additionalMetaTags={[
        {
          name: 'author',
          content: 'Karol Binkowski',
        },
        {
          name: 'keywords',
          content:
            'front-end developer, react developer, blog about tech, karol binkowski',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ]}
    />
  );
}

export default Seo;
