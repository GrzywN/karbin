import { Heading, Section } from '@karbin/shared/ui';

import { BlogPostList } from '../blog-post-list/blog-post-list';

import type { BlogPost } from '../blog-post-preview-card/blog-post-preview-card';

export interface BlogPostsSectionProps {
  sectionTitle: string;
  heading: string | React.ReactNode;
  posts: BlogPost[];
}

export function BlogPostsSection(props: BlogPostsSectionProps) {
  const { sectionTitle, heading, posts } = props;

  return (
    <Section title={sectionTitle}>
      <Heading as="h2" size="lg" color="light">
        {heading}
      </Heading>
      <BlogPostList posts={posts} />
    </Section>
  );
}

export default BlogPostsSection;
