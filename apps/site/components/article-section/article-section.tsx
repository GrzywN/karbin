import { useEffect } from 'react';
import hljs from 'highlight.js/lib/common';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { Article } from '@karbin/shared/ui';

import imageKarolBinkowski from '../../public/images/avatars/KarolBinkowski.png';
import 'highlight.js/styles/atom-one-dark.css';

export interface ArticleSectionProps {
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
}

export function ArticleSection(props: ArticleSectionProps) {
  const { frontMatter, html } = props;
  const { title, date, tags, author } = frontMatter;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
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
    </>
  );
}

export default ArticleSection;
