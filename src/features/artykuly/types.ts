export type ArticleBlockType = 'paragraph' | 'heading' | 'subheading' | 'quote';

export interface ArticleTextBlock {
  type: ArticleBlockType;
  text: string;
}

export interface ArticleTableBlock {
  type: 'table';
  rows: string[][];
}

export type ArticleBlock = ArticleTextBlock | ArticleTableBlock;

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readingMinutes: number;
  blocks: ArticleBlock[];
}
