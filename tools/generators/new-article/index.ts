import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
} from '@nrwl/devkit';
import s from 'slugify';

// This implementation should be the same as in shared/slug
function slugify(str: string): string {
  return s(str, {
    trim: true,
    lower: true,
  });
}

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
  tags: string[];
}

export default async function (tree: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    './content/articles',
    {
      title: schema.title,
      author: schema.author,
      excerpt: schema.excerpt || '',
      tags: schema.tags,
      normalizedTitle: slugify(schema.title),
      creationDate: new Date().toISOString(),
    }
  );

  await formatFiles(tree);
}
