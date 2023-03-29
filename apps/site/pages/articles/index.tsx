import { getStringifiedJsonContent } from '@karbin/json-content';
import { getParsedFileContentBySlug } from '@karbin/markdown';
import { readdirSync } from 'fs';
import { join } from 'path';

import AllArticlesSection, {
  AllArticlesSectionProps,
} from '../../components/all-articles-section/all-articles-section';

const POSTS_PATH = join(process.cwd(), 'content/articles');
const CONTENT_PATH = join(process.cwd(), 'content/site');

export interface ArticlesPageProps {
  allArticlesSectionContent: AllArticlesSectionProps;
}

export function Articles(props: ArticlesPageProps) {
  const { allArticlesSectionContent } = props;

  console.log(allArticlesSectionContent);

  return <AllArticlesSection {...allArticlesSectionContent} />;
}

export const getStaticProps = ({ locale }) => {
  let allArticlesSectionContent = getStringifiedJsonContent(
    locale,
    join(CONTENT_PATH, 'all-articles-section')
  ) as AllArticlesSectionProps;

  const paths = readdirSync(POSTS_PATH).map((path) =>
    path.replace(/\.mdx?/, '')
  );

  const articleFrontMatters = paths
    .map((path) => getParsedFileContentBySlug(path, POSTS_PATH))
    .map((content) => content.frontMatter);

  allArticlesSectionContent = {
    ...allArticlesSectionContent,
    articleFrontMatters,
  };

  return {
    props: {
      allArticlesSectionContent,
    },
    revalidate: 15,
  };
};

export default Articles;
