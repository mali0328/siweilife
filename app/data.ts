export type Article = {
  slug: string;
  category: string;
  categorySlug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readingTime: string;
  content: string[];
};

import { articles } from "./generated-posts";
export { articles };

export const categories = [
  { slug: "life-rhythm", number: "01", title: "生活節奏", description: "在快與慢之間，找回適合自己的步伐" },
  { slug: "life-editing", number: "02", title: "人生重新編排", description: "把混亂攤開來，重新看見選擇的方向" },
  { slug: "relationships", number: "03", title: "關係與界線", description: "練習靠近，也練習好好保護自己" },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
