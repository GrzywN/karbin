import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';

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
      normalizedTitle: names(schema.title).fileName,
      creationDate: new Date().toISOString(),
    }
  );

  await formatFiles(tree);
}
