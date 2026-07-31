import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "../components/site-shell";
import { categories } from "../data";

export const metadata: Metadata = { title: "生活主題｜肆維人生事務所", description: "從生活節奏、人生重新編排，到關係與界線。" };

export default function TopicsPage() {
  return (
    <PageFrame>
      <main className="inner-page section-shell">
        <div className="page-intro compact-intro">
          <p className="eyebrow">DIRECTIONS</p>
          <h1>從哪裡開始，<br /><em>都可以。</em></h1>
          <p>挑一個現在最靠近你的主題，讓文字陪你走一小段。</p>
        </div>
        <div className="topic-page-list">
          {categories.map((category) => (
            <Link className="topic-page-row" href={`/topics/${category.slug}`} key={category.slug}>
              <span className="topic-number">{category.number}</span>
              <div><h2>{category.title}</h2><p>{category.description}</p></div>
              <span className="topic-arrow">↗</span>
            </Link>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}
