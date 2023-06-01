import { BlogPost } from '../components/blog-post-preview-card/blog-post-preview-card';

export function sortPostsBasedOnDate(posts: BlogPost[]): void {
  posts.sort((a, b) => {
    return Date.parse(b.whenPublished) - Date.parse(a.whenPublished);
  });
}
