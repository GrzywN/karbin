import { getStringifiedJsonContent } from '@karbin/json-content';
import { join } from 'path';
import BlogPostsSection from '../components/blog-posts-section/blog-posts-section';
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
  contactSectionContent: ContactSectionProps;
}

export function Index(props: IndexProps) {
  const {
    quickIntroductionSectionContent,
    myWorkSectionContent,
    contactSectionContent,
  } = props;

  return (
    <>
      <QuickIntroductionSection {...quickIntroductionSectionContent} />
      <MyWorkSection {...myWorkSectionContent} />
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
  ) as QuickIntroductionSectionProps;

  const contactSectionContent = getStringifiedJsonContent(
    locale,
    join(CONTENT_PATH, 'contact-section')
  ) as QuickIntroductionSectionProps;

  return {
    props: {
      quickIntroductionSectionContent,
      myWorkSectionContent,
      contactSectionContent,
    },
  };
}

export default Index;
