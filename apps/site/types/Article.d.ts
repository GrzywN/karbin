export interface ArticleFileContent {
  frontMatter: ArticleFrontMatter;
  html: {
    compiledSource: string;
  };
}

export interface ArticleFrontMatter {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author: {
    name: string;
  };
}
