import AboutSection from '../../components/about-section/about-section';

import imageKarolBinkowski from '../../public/images/avatars/KarolBinkowski.png';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
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
    </>
  );
}

export default AboutPage;
