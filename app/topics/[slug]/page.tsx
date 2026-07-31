import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "../../components/site-shell";
import { articles, categories, getCategory } from "../../data";

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const category = getCategory((await params).slug);
  return { title: category ? `${category.title}｜肆維人生事務所` : "生活主題｜肆維人生事務所", description: category?.description };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const category = getCategory((await params).slug);
  if (!category) notFound();
  const categoryArticles = articles.filter((article) => article.categorySlug === category.slug);
  return (
    <PageFrame>
      <main className="inner-page section-shell">
        <div className="page-intro compact-intro">
          <Link className="back-link" href="/topics">← 所有生活主題</Link>
          <p className="eyebrow">{category.number} / TOPIC</p>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
        <div className="topic-article-list">
          {categoryArticles.map((article) => (
            <article className="topic-article-row" key={article.slug}>
              <div className="topic-article-date">{article.date}<br />{article.readingTime}</div>
              <div><h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2><p>{article.excerpt}</p></div>
              <Link className="topic-arrow" href={`/articles/${article.slug}`} aria-label={`閱讀：${article.title}`}>↗</Link>
            </article>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}
