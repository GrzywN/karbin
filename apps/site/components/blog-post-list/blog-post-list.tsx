import { Paper, Stack, Text } from '@karbin/shared/ui';

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
    <Paper classes="max-w-3xl" hasPadding color="tertiary">
      {posts.length > 0 ? (
        <Stack>
          {posts.map((postProps: BlogPostPreviewCardProps, index) => (
            <BlogPostPreviewCard key={index} {...postProps} />
          ))}
        </Stack>
      ) : (
        <Text color="dark" size="xl">
          There are no articles here yet.
        </Text>
      )}
    </Paper>
  );
}

export default BlogPostList;
