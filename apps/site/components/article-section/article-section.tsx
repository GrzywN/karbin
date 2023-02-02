import { useEffect } from 'react';
import hljs from 'highlight.js/lib/common';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { Section, Article } from '@karbin/shared/ui';

import ArticleNavigationButton from '../article-navigation-button/article-navigation-button';

import imageKarolBinkowski from '../../public/images/avatars/KarolBinkowski.png';
import 'highlight.js/styles/atom-one-dark.css';

import type {
  ArticleFileContent,
  ArticleFrontMatter,
} from '../../types/Article';

export interface ArticleSectionProps {
  previousArticleFrontMatter: ArticleFrontMatter | null;
  currentArticle: ArticleFileContent;
  nextArticleFrontMatter: ArticleFrontMatter | null;
}

export function ArticleSection(props: ArticleSectionProps) {
  const { previousArticleFrontMatter, currentArticle, nextArticleFrontMatter } =
    props;
  const { frontMatter, html } = currentArticle;
  const { title, date, tags, author } = frontMatter;
  const router = useRouter();

  useEffect(() => {
    hljs.highlightAll();
  }, [router]);

  return (
    <Section title={title}>
      <Article
        title={title}
        authorAvatarNode={
          <Image
            src={imageKarolBinkowski}
            alt={author.name}
            width="64"
            height="64"
          />
        }
        authorName={author.name}
        date={date}
        minutesRead={12}
        tags={tags}
        contentNode={<MDXRemote {...html} />}
      />
      <div className="flex items-center justify-between">
        {previousArticleFrontMatter && (
          <ArticleNavigationButton
            frontMatter={previousArticleFrontMatter}
            direction="left"
          />
        )}
        <div className="grow" />
        {nextArticleFrontMatter && (
          <ArticleNavigationButton
            frontMatter={nextArticleFrontMatter}
            direction="right"
          />
        )}
      </div>
    </Section>
  );
}

export default ArticleSection;
