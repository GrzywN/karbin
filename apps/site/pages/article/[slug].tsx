import {
  getNextBlogPostFileName,
  getParsedFileContentBySlug,
  getPreviousBlogPostFileName,
  renderMarkdown,
} from '@karbin/markdown';
import { readdirSync } from 'fs';
import { join } from 'path';

import ArticleSection from '../../components/article-section/article-section';

import type {
  ArticleFileContent,
  ArticleFrontMatter,
} from '../../types/Article';

const POSTS_PATH = join(process.cwd(), 'content/articles');

export interface ArticlePageProps {
  previousArticleFrontMatter: ArticleFrontMatter | null;
  currentArticle: ArticleFileContent;
  nextArticleFrontMatter: ArticleFrontMatter | null;
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
  const currFileName = params.slug;
  const prevFileName = getPreviousBlogPostFileName(POSTS_PATH, currFileName);
  const nextFileName = getNextBlogPostFileName(POSTS_PATH, currFileName);

  const currArticleMarkdownContent = getParsedFileContentBySlug(
    currFileName,
    POSTS_PATH
  );
  const html = await renderMarkdown(currArticleMarkdownContent.content);

  let prevArticleFrontMatter: ArticleFrontMatter | null = null;
  let nextArticleFrontMatter: ArticleFrontMatter | null = null;

  if (prevFileName != null) {
    prevArticleFrontMatter = getParsedFileContentBySlug(
      prevFileName,
      POSTS_PATH
    ).frontMatter as ArticleFrontMatter;
  }

  if (nextFileName != null) {
    nextArticleFrontMatter = getParsedFileContentBySlug(
      nextFileName,
      POSTS_PATH
    ).frontMatter as ArticleFrontMatter;
  }

  return {
    props: {
      previousArticleFrontMatter: prevArticleFrontMatter,
      currentArticle: {
        frontMatter: currArticleMarkdownContent.frontMatter,
        html,
      },
      nextArticleFrontMatter: nextArticleFrontMatter,
    },
    revalidate: 15,
  };
};

export const getStaticPaths = () => {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
