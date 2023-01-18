import QuickIntroductionSection from '../components/quick-introduction-section/quick-introduction-section';
import MyWorkSection from '../components/my-work-section/my-work-section';
import BlogPostsSection from '../components/blog-posts-section/blog-posts-section';
import ContactSection from '../components/contact-section/contact-section';

import imageBorKur from '../public/images/work/BorKur.png';
import imagePasja from '../public/images/work/Pasja.png';
import imageYoutubeDownloader from '../public/images/work/YoutubeDownloader.png';

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
            imageAlt: '',
            imagePriority: true,
            textHeading: 'BOR-KUR',
            textParagraph: 'A chicken farm website.',
            textButton: 'Read more',
            buttonHref: '/project/bor-kur',
          },
          {
            imageSrc: imagePasja,
            imageAlt: '',
            imagePriority: true,
            textHeading: 'Studio Fryzur Pasja',
            textParagraph: "A local business hairdresser's website.",
            textButton: 'Read more',
            buttonHref: '/project/studio-fryzur-pasja',
          },
          {
            imageSrc: imageYoutubeDownloader,
            imageAlt: '',
            imagePriority: true,
            textHeading: 'Youtube Downloader',
            textParagraph: 'A simple youtube downloader with built-in search.',
            textButton: 'Read more',
            buttonHref: '/project/youtube-downloader',
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
            title: 'Why Vim might be a better choice than famous VS Code.',
            whenPublished: '1 month ago',
            tags: ['Vim', 'Linux', 'Productivity'],
          },
          {
            title:
              'Using "as" prop to create polymorphic React components (with TypeScript)',
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
