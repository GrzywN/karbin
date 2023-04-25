import QuickIntroductionSection from '../components/quick-introduction-section/quick-introduction-section';
import MyWorkSection from '../components/my-work-section/my-work-section';
import BlogPostsSection from '../components/blog-posts-section/blog-posts-section';
import ContactSection from '../components/contact-section/contact-section';

import imageBorKur from '../public/images/work/BorKur.png';
import imagePasja from '../public/images/work/Pasja.png';
import imageYoutubeDownloader from '../public/images/work/YoutubeDownloader.png';
import imageBorKurPreview from '../public/images/work/BorKurPreview.png';
import imagePasjaPreview from '../public/images/work/PasjaPreview.png';
import imageYoutubeDownloaderPreview from '../public/images/work/YoutubeDownloaderPreview.png';

export function Index() {
  return (
    <>
      <QuickIntroductionSection
        sectionTitle="About"
        text={
          <>
            Hello 👋 I&apos;m a Junior Front-end developer strongly <br />
            focused on
            <strong> React/React Native</strong> apps development.
          </>
        }
      />
      <MyWorkSection
        sectionTitle="My work"
        heading="My work 👇"
        cards={[
          {
            imageSrc: imageBorKur,
            imageAlt: 'A BOR-KUR website preview.',
            imagePriority: true,
            textHeading: 'BOR-KUR',
            textParagraph: 'A chicken farm website.',
            textButton: 'Read more',
            modalTitle: 'BOR-KUR.pl',
            modalDescription: `
                A dedicated website made for a chicken farm to increase its
                network of potential customers. It contains valuable information
                to encourage potential contacts and mutual cooperation. It was
                enhanced with additional features like a dark mode,
                multilingualism and a password-protected link shortener on
                request.`,
            modalImageSrc: imageBorKurPreview,
            modalImageAlt: 'A BOR-KUR website preview.',
            modalTags: ['Next.js', 'TypeScript', 'Contentful', 'i18n'],
            modalLinkPreview: 'https://bor-kur.pl/',
            modalLinkSource: 'https://github.com/GrzywN/bor-kur',
          },
          {
            imageSrc: imagePasja,
            imageAlt: "Studio Fryzur Pasja's website preview.",
            imagePriority: true,
            textHeading: 'Studio Fryzur Pasja',
            textParagraph: "A local business hairdresser's website.",
            textButton: 'Read more',
            modalTitle: 'Studio Fryzur Pasja',
            modalDescription: `
                A dedicated website that serves as the local company's business card and aims
                to make the company stand out among its competitors.
                My services additionally included placement of the hair salon on Google maps
                and promotion through Google Ads.`,
            modalImageSrc: imagePasjaPreview,
            modalImageAlt: "Studio Fryzur Pasja's website preview.",
            modalTags: ['Next.js', 'Tailwind CSS', 'Google Maps API'],
            modalLinkPreview: 'https://studiofryzurpasja.pl/',
            modalLinkSource: 'https://github.com/GrzywN/pasja',
          },
          {
            imageSrc: imageYoutubeDownloader,
            imageAlt: 'A preview of Youtube Downloader app.',
            imagePriority: true,
            textHeading: 'Youtube Downloader',
            textParagraph: 'A simple youtube downloader with built-in search.',
            textButton: 'Read more',
            modalTitle: 'Youtube Downloader',
            modalDescription: `Simple youtube downloader which makes downloading youtube videos, high-quality music from a playlist or by search results really easy. You don't need to use your browser to search for youtube links anymore or use any of the online services.`,
            modalImageSrc: imageYoutubeDownloaderPreview,
            modalImageAlt: 'A preview of Youtube Downloader app.',
            modalTags: ['Electron', 'JavaScript', 'Bulma'],
            modalLinkPreview:
              'https://raw.githubusercontent.com/GrzywN/Youtube-Downloader/main/screenshot.gif',
            modalLinkSource: 'https://github.com/GrzywN/Youtube-Downloader',
          },
        ]}
      />
      <BlogPostsSection
        sectionTitle="Featured blog posts"
        heading={
          <>
            Featured blog posts <span className="ml-2">📝</span>
          </>
        }
        posts={[
          {
            title: 'Why Vim might be a better choice than famous VS Code',
            whenPublished: '1 month ago',
            tags: ['Vim', 'Linux', 'Productivity'],
          },
          {
            title:
              'Creating Polymorphic React Components with TypeScript Generics',
            whenPublished: '2 months ago',
            tags: ['React', 'TypeScript', 'Design System'],
          },
        ]}
      />
      <ContactSection
        sectionTitle="Get in touch"
        heading="Get in touch"
        email="karolbinkowski3@proton.me"
        resumeFileName="Resume-Karol-Binkowski.pdf"
      />
    </>
  );
}

export default Index;
