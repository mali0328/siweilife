import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "../components/site-shell";
import { articles } from "../data";

export const metadata: Metadata = {
  title: "文章｜肆維人生事務所",
  description: "關於生活節奏、人生重新編排，以及關係與界線的文字。",
};

export default function ArticlesPage() {
  return (
    <PageFrame>
      <main className="inner-page section-shell">
        <div className="page-intro">
          <p className="eyebrow">THE JOURNAL</p>
          <h1>寫給正在生活裡<br /><em>慢慢找路的人。</em></h1>
          <p>這裡收集每一段關於生活節奏、選擇與關係的文字。你可以從最新的一篇開始，也可以依照現在最靠近你的主題閱讀。</p>
        </div>
        <div className="archive-grid">
          {articles.map((article) => (
            <article className="archive-card" key={article.slug}>
              <Link className="archive-image" href={`/articles/${article.slug}`}><img src={article.image} alt="" /></Link>
              <div className="article-meta"><span>{article.category}</span><span>{article.date}</span></div>
              <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
              <p>{article.excerpt}</p>
              <Link className="card-link" href={`/articles/${article.slug}`}>閱讀文章　↗</Link>
            </article>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}
