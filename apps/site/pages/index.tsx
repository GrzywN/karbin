import { getStringifiedJsonContent } from '@karbin/json-content';
import { join } from 'path';
import BlogPostsSection, {
  BlogPostsSectionProps,
} from '../components/blog-posts-section/blog-posts-section';
import ContactSection, {
  ContactSectionProps,
} from '../components/contact-section/contact-section';
import MyWorkSection, {
  MyWorkSectionProps,
} from '../components/my-work-section/my-work-section';
import QuickIntroductionSection, {
  QuickIntroductionSectionProps,
} from '../components/quick-introduction-section/quick-introduction-section';

const CONTENT_PATH = join(process.cwd(), 'content/site');

export interface IndexProps {
  quickIntroductionSectionContent: QuickIntroductionSectionProps;
  myWorkSectionContent: MyWorkSectionProps;
  blogPostsSectionContent: BlogPostsSectionProps;
  contactSectionContent: ContactSectionProps;
}

export function Index(props: IndexProps) {
  const {
    quickIntroductionSectionContent,
    myWorkSectionContent,
    blogPostsSectionContent,
    contactSectionContent,
  } = props;

  return (
    <>
      <QuickIntroductionSection {...quickIntroductionSectionContent} />
      <MyWorkSection {...myWorkSectionContent} />
      <BlogPostsSection {...blogPostsSectionContent} />
      <ContactSection {...contactSectionContent} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const quickIntroductionSectionContent = getStringifiedJsonContent(
    locale,
    join(CONTENT_PATH, 'quick-introduction-section')
  ) as QuickIntroductionSectionProps;

  const myWorkSectionContent = getStringifiedJsonContent(
    locale,
    join(CONTENT_PATH, 'my-work-section')
  ) as MyWorkSectionProps;

  const blogPostsSectionContent = getStringifiedJsonContent(
    locale,
    join(CONTENT_PATH, 'blog-posts-section')
  ) as BlogPostsSectionProps;

  const contactSectionContent = getStringifiedJsonContent(
    locale,
    join(CONTENT_PATH, 'contact-section')
  ) as ContactSectionProps;

  return {
    props: {
      quickIntroductionSectionContent,
      myWorkSectionContent,
      blogPostsSectionContent,
      contactSectionContent,
    },
  };
}

export default Index;
