import AboutSection from '../../components/about-section/about-section';
import MyToolsSection from '../../components/my-tools-section/my-tools-section';

import imageKarolBinkowski from '../../public/images/avatars/KarolBinkowski.png';

export function AboutPage() {
  return (
    <>
      <AboutSection
        sectionTitle="About me"
        heading="About me"
        paragraphs={[
          <>
            I&apos;m a <strong>Junior Front-end developer</strong> strongly
            focused on <strong>React/React Native</strong> apps development, but
            I can adapt to whatever tools are required.
          </>,
          <>
            I currently have several commercial projects under my belt and have
            already contributed to open-source codebases like
            <strong> Nx</strong>. I live in <strong>Poland</strong>, but I would
            be happy to work remotely.
          </>,
          <>
            When I don&apos;t code, you&apos;ll find me outdoors. I love being
            out in nature whether that&apos;s going for a walk, biking, reading
            books or just hanging out with my friends.
          </>,
        ]}
        imageSrc={imageKarolBinkowski}
        imageAlt="Karol Binkowski"
      />
      <MyToolsSection
        sectionTitle="My tools"
        heading="My tools"
        categories={[
          {
            heading: 'Frontend',
            list: [
              <>
                <abbr title="HyperText Markup Language">HTML</abbr> and{' '}
                <abbr title="Cascading Style Sheets">CSS</abbr>
              </>,
              'JavaScript',
              'Next.js',
              'React',
              'Tailwind CSS',
              'TypeScript',
            ],
          },
          {
            heading: 'Design',
            list: [
              'Design Systems',
              'Figma',
              'Responsive Web Design',
              'Storybook',
              <>
                <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>
              </>,
            ],
          },
          {
            heading: 'Approaches',
            list: [
              'Atomic Design',
              <>
                <abbr title="Block Element Modifier">BEM</abbr>
              </>,
              'Design Patterns',
              'Test-driven development',
              <>
                <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>
              </>,
            ],
          },
          {
            heading: 'Testing',
            list: [
              'Cypress',
              'Jest',
              'React Testing Library',
              'Test-driven development',
              'Vitest',
            ],
          },
          {
            heading: 'Integrations',
            list: [
              'Google Analytics',
              'Google Maps',
              <>
                Headless <abbr title="Content Management System">CMS</abbr>
              </>,
              'Open Street Maps',
            ],
          },
          {
            heading: 'Workflow',
            list: ['Figma', 'GIMP', 'Git', 'Linux', 'Nx workspaces', 'Vim'],
          },
        ]}
      />
    </>
  );
}

export default AboutPage;
