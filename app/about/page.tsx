import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "../components/site-shell";

export const metadata: Metadata = { title: "關於事務所｜肆維人生事務所", description: "給正在重新整理生活的人，一個安靜、有方向的地方。" };

export default function AboutPage() {
  return (
    <PageFrame>
      <main className="inner-page section-shell about-page">
        <div className="page-intro">
          <p className="eyebrow">ABOUT THE OFFICE</p>
          <h1>留一個位置，<br /><em>讓自己回來。</em></h1>
          <p>肆維人生事務所，是一個談生活與人生整理的文字空間。這裡不急著給你標準答案，而是陪你把眼前的生活看清楚一點。</p>
        </div>
        <div className="about-manifesto">
          <div className="section-kicker">OUR VIEW</div>
          <h2>生活不是一道<br /><em>標準答案題。</em></h2>
          <div><p>我們從四個方向觀看自己：身體的感受、情緒的流動、關係的距離，以及正在發生的日常。</p><p>希望每一篇文章，都能替你留下一小段安靜的時間。你不必急著變成更厲害的人，先更靠近自己一點，也是一種前進。</p></div>
        </div>
        <Link className="text-link" href="/articles">讀讀最近的文章　↗</Link>
      </main>
    </PageFrame>
  );
}
