import WorkSection from '../../components/work-section/work-section';

import imageBorKurPreview from '../../public/images/work/BorKurPreview.png';
import imagePasjaPreview from '../../public/images/work/PasjaPreview.png';
import imageYoutubeDownloaderPreview from '../../public/images/work/YoutubeDownloaderPreview.png';

export function WorkPage() {
  return (
    <WorkSection
      sectionTitle="My work"
      heading="My work"
      projects={[
        {
          title: 'BOR-KUR.pl',
          description: `
                A dedicated website made for a chicken farm to increase its
                network of potential customers. It contains valuable information
                to encourage potential contacts and mutual cooperation. It was
                enhanced with additional features like a dark mode,
                multilingualism and a password-protected link shortener on
                request.`,
          imageSrc: imageBorKurPreview,
          imageAlt: 'A BOR-KUR website preview.',
          tags: ['Next.js', 'Headless CMS', 'i18n'],
          linkPreview: 'https://bor-kur.pl/',
          linkSource: 'https://github.com/GrzywN/bor-kur',
        },
        {
          title: 'Studio Fryzur Pasja',
          description: `
                A dedicated website that serves as the local company's business card and aims
                to make the company stand out among its competitors.
                My services additionally included placement of the hair salon on Google maps
                and promotion through Google Ads.`,
          imageSrc: imagePasjaPreview,
          imageAlt: "Studio Fryzur Pasja's website preview.",
          tags: ['Next.js', 'Tailwind CSS', 'Google Maps API'],
          linkPreview: 'https://studiofryzurpasja.pl/',
          linkSource: 'https://github.com/GrzywN/pasja',
        },
        {
          title: 'Youtube Downloader',
          description: `Simple youtube downloader which makes downloading youtube videos, high-quality music from a playlist or by search results really easy. You don't need to use your browser to search for youtube links anymore or use any of the online services.`,
          imageSrc: imageYoutubeDownloaderPreview,
          imageAlt: 'A preview of Youtube Downloader app.',
          tags: ['Electron', 'JavaScript', 'Bulma'],
          linkPreview:
            'https://raw.githubusercontent.com/GrzywN/Youtube-Downloader/main/screenshot.gif',
          linkSource: 'https://github.com/GrzywN/Youtube-Downloader',
        },
      ]}
    />
  );
}

export default WorkPage;
