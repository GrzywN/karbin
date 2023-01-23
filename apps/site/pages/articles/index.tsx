import { join } from 'path';
import { readdirSync } from 'fs';
import { getParsedFileContentBySlug } from '@karbin/markdown';

import AllArticlesSection from '../../components/all-articles-section/all-articles-section';

const POSTS_PATH = join(process.cwd(), 'content/articles');

export interface ArticlesPageProps {
  articleFrontMatters: {
    title: string;
    date: string;
    tags: string[];
    author: {
      name: string;
    };
  }[];
}

export function Articles(props: ArticlesPageProps) {
  const { articleFrontMatters } = props;

  return (
    <AllArticlesSection
      sectionTitle="All articles"
      articleFrontMatters={articleFrontMatters}
    />
  );
}

export const getStaticProps = () => {
  const paths = readdirSync(POSTS_PATH).map((path) =>
    path.replace(/\.mdx?/, '')
  );

  const articleFrontMatters = paths
    .map((path) => getParsedFileContentBySlug(path, POSTS_PATH))
    .map((content) => content.frontMatter);

  return {
    props: {
      articleFrontMatters,
    },
    revalidate: 1200,
  };
};

export default Articles;
