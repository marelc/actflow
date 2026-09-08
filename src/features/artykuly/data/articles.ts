import articlesData from './articles.json';
import type { Article } from '../types';

export const articles = articlesData as Article[];

export function findArticleBySlug(slug: string | undefined) {
  return articles.find((article) => article.slug === slug);
}
