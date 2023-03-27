import { getStringifiedJsonContent } from '@karbin/json-content';
import { join } from 'path';
import AboutSection, {
  AboutSectionProps,
} from '../../components/about-section/about-section';
import MyToolsSection, {
  MyToolsSectionProps,
} from '../../components/my-tools-section/my-tools-section';

import imageKarolBinkowski from '../../public/images/avatars/KarolBinkowski.png';

const CONTENT_PATH = join(process.cwd(), 'content/site');

export interface AboutPageProps {
  aboutSectionContent: AboutSectionProps;
  myToolsSectionContent: MyToolsSectionProps;
}

export function AboutPage(props: AboutPageProps) {
  const { aboutSectionContent, myToolsSectionContent } = props;

  return (
    <>
      <AboutSection {...aboutSectionContent} imageSrc={imageKarolBinkowski} />
      <MyToolsSection {...myToolsSectionContent} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const aboutSectionContent = getStringifiedJsonContent(
    locale,
    join(CONTENT_PATH, 'about-section')
  ) as AboutSectionProps;

  const myToolsSectionContent = getStringifiedJsonContent(
    locale,
    join(CONTENT_PATH, 'my-tools-section')
  ) as MyToolsSectionProps;

  return {
    props: {
      aboutSectionContent,
      myToolsSectionContent,
    },
  };
}

export default AboutPage;
