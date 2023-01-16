import { Paper } from '@karbin/shared/ui';

import {
  BlogPostPreviewCard,
  BlogPostPreviewCardProps,
} from '../blog-post-preview-card/blog-post-preview-card';

export interface BlogPostListProps {
  posts: BlogPostPreviewCardProps[];
}

export function BlogPostList(props: BlogPostListProps) {
  const { posts } = props;

  return (
    <Paper classes="p-4 max-w-3xl" color="tertiary">
      <ul className="grid gap-3">
        {posts.map((postProps: BlogPostPreviewCardProps, index) => (
          <BlogPostPreviewCard key={index} {...postProps} />
        ))}
      </ul>
    </Paper>
  );
}

export default BlogPostList;
