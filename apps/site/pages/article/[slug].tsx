import { join } from 'path';
import { readdirSync } from 'fs';
import { getParsedFileContentBySlug, renderMarkdown } from '@karbin/markdown';

import ArticleSection from '../../components/article-section/article-section';

const POSTS_PATH = join(process.cwd(), 'content/articles');

export interface ArticlePageProps {
  frontMatter: {
    title: string;
    date: string;
    tags: string[];
    author: {
      name: string;
    };
  };
  html: {
    compiledSource: string;
  };
  slug: string;
}

export function ArticlePage(props: ArticlePageProps) {
  return <ArticleSection {...props} />;
}

export const getStaticProps = async ({
  params,
}: {
  params: ArticlePageProps;
}) => {
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  );
  const html = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html,
    },
  };
};

export const getStaticPaths = () => {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
