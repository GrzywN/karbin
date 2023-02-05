import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export function Seo() {
  const { pathname } = useRouter() || { pathname: '' };

  return (
    <NextSeo
      title="Karol Binkowski | Front-end developer"
      description="Hello! I'm a Junior Front-end developer strongly
focused on React/React Native apps development."
      canonical={`https://karolbinkowski.me${pathname}`}
      themeColor="#818cf8"
      openGraph={{
        url: 'https://karolbinkowski.me',
        type: 'website',
        title: 'Karol Binkowski | Front-end developer',
        description: `Hello! I'm a Junior Front-end developer strongly
focused on React/React Native apps development.`,
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt.',
            type: 'image/jpeg',
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
