import { readingTime } from '@karbin/reading-time';
import { slugify } from '@karbin/shared/slug';
import { Article, ArticleNavigationButton, Section } from '@karbin/shared/ui';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import imageKarolBinkowski from '../../public/images/avatars/KarolBinkowski.png';

import hljs from 'highlight.js/lib/common';
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
  const minutesToRead = readingTime(html.compiledSource);

  const router = useRouter();
  useEffect(() => {
    hljs.highlightAll();
  }, [router]);

  const handlePreviousArticleButtonClick = () => {
    router.push(`/articles/${slugify(previousArticleFrontMatter.title)}`);
  };

  const handleNextArticleButtonClick = () => {
    router.push(`/articles/${slugify(nextArticleFrontMatter.title)}`);
  };

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
        minutesRead={minutesToRead}
        tags={tags}
        contentNode={<MDXRemote {...html} />}
      />
      <div className="flex items-center justify-between">
        {previousArticleFrontMatter && (
          <ArticleNavigationButton
            title={previousArticleFrontMatter.title}
            formattedDate={new Date(
              previousArticleFrontMatter.date
            ).toLocaleDateString()}
            tags={previousArticleFrontMatter.tags}
            direction="right"
            onClick={handlePreviousArticleButtonClick}
          />
        )}
        <div className="grow" />
        {nextArticleFrontMatter && (
          <ArticleNavigationButton
            title={nextArticleFrontMatter.title}
            formattedDate={new Date(
              nextArticleFrontMatter.date
            ).toLocaleDateString()}
            tags={nextArticleFrontMatter.tags}
            direction="right"
            onClick={handleNextArticleButtonClick}
          />
        )}
      </div>
    </Section>
  );
}

export default ArticleSection;
