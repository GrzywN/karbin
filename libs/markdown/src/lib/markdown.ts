import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export function getPreviousBlogPostFileName(
  postsPath: string,
  blogPostTitle: string
) {
  const paths: string[] = readdirSync(postsPath).map((path: string) =>
    path.replace(/\.mdx?/, '')
  );

  const pathIndex = paths.indexOf(blogPostTitle);

  if (pathIndex === -1 || paths[pathIndex - 1] == null) {
    return null;
  }

  return paths[pathIndex - 1];
}

export function getNextBlogPostFileName(
  postsPath: string,
  blogPostTitle: string
) {
  const paths: string[] = readdirSync(postsPath).map((path: string) =>
    path.replace(/\.mdx?/, '')
  );
  const pathIndex = paths.indexOf(blogPostTitle);

  if (pathIndex === -1 || paths[pathIndex + 1] == null) {
    return null;
  }

  return paths[pathIndex + 1];
}

export function getParsedFileContentBySlug(
  fileName: string,
  postsPath: string
) {
  const postFilePath = join(postsPath, `${fileName}.mdx`);
  const fileContent = readFileSync(postFilePath);

  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content,
  };
}

export function renderMarkdown(markdownContent: string) {
  return serialize(markdownContent);
}
