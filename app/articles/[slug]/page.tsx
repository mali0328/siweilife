import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "../../components/site-shell";
import { articles, getArticle } from "../../data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return { title: article ? `${article.title}｜肆維人生事務所` : "文章｜肆維人生事務所", description: article?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <PageFrame>
      <main className="article-detail section-shell">
        <div className="article-breadcrumb"><Link href="/articles">文章</Link><span>/</span><span>{article.category}</span></div>
        <div className="article-detail-head">
          <div>
            <p className="eyebrow">{article.category}　·　{article.date}</p>
            <h1>{article.title}</h1>
            <p className="article-lede">{article.excerpt}</p>
            <small>{article.readingTime}</small>
          </div>
          <div className="detail-image"><img src={article.image} alt="" /></div>
        </div>
        <div className="article-body">
          {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="article-back"><Link className="text-link" href="/articles">← 回到全部文章</Link></div>
      </main>
    </PageFrame>
  );
}
