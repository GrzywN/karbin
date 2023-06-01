import { Heading, Section } from '@karbin/shared/ui';

import BlogPostList from '../blog-post-list/blog-post-list';

export interface AllArticlesSectionProps {
  sectionTitle: string;
  heading: string;
  articleFrontMatters: ArticleFrontMatter[];
}

export interface ArticleFrontMatter {
  title: string;
  date: string;
  tags: string[];
  author: {
    name: string;
  };
}

export function AllArticlesSection(props: AllArticlesSectionProps) {
  const { sectionTitle, heading, articleFrontMatters = [] } = props;

  const posts = articleFrontMatters.map((frontMatter) => {
    return {
      title: frontMatter.title,
      whenPublished: new Date(frontMatter.date).toLocaleDateString(),
      tags: frontMatter.tags,
    };
  });

  return (
    <Section title={sectionTitle}>
      <Heading as="h1" size="xl" color="light">
        {heading}
      </Heading>
      <BlogPostList posts={posts} />
    </Section>
  );
}

export default AllArticlesSection;
