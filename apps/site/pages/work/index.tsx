import { getParsedJsonContent } from '@karbin/json-content';
import { join } from 'path';
import WorkSection, {
  WorkSectionProps,
} from '../../components/work-section/work-section';

const CONTENT_PATH = join(process.cwd(), 'content/site');

export interface WorkPageProps {
  workSectionContent: WorkSectionProps;
}

export function WorkPage(props: WorkPageProps) {
  const { workSectionContent } = props;

  return <WorkSection {...workSectionContent} />;
}

export async function getStaticProps({ locale }) {
  const workSectionContent = getParsedJsonContent(
    locale,
    join(CONTENT_PATH, 'work-section')
  ) as WorkSectionProps;

  return {
    props: {
      workSectionContent,
    },
  };
}

export default WorkPage;
