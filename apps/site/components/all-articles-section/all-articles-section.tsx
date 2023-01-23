import { Section, Heading } from '@karbin/shared/ui';

import BlogPostList from '../blog-post-list/blog-post-list';

export interface AllArticlesSectionProps {
  sectionTitle: string;
  articleFrontMatters: {
    title: string;
    date: string;
    tags: string[];
    author: {
      name: string;
    };
  }[];
}

export function AllArticlesSection(props: AllArticlesSectionProps) {
  const { sectionTitle, articleFrontMatters = [] } = props;

  const posts = articleFrontMatters.map((frontMatter) => {
    return {
      title: frontMatter.title,
      whenPublished: new Date(frontMatter.date).toLocaleDateString(),
      tags: frontMatter.tags,
    };
  });

  return (
    <Section title={sectionTitle}>
      <Heading as="h1" size="xl">
        All articles
      </Heading>
      <BlogPostList posts={[]} />
    </Section>
  );
}

export default AllArticlesSection;
