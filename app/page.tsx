import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "./components/site-shell";
import { articles, categories } from "./data";

export const metadata: Metadata = {
  title: "肆維人生事務所｜把生活過成自己的樣子",
  description: "給正在重新整理生活的人，一個安靜、有方向的地方。",
};

export default function Home() {
  return (
    <PageFrame><main>
      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">A SMALL OFFICE FOR A LIFE IN PROGRESS</p>
          <h1>
            把生活過成
            <br />
            <em>自己的樣子。</em>
          </h1>
          <p className="hero-description">
            這裡寫給正在整理人生的人。關於節奏、選擇、關係，也關於那些還沒有答案、但值得被好好放在心上的事。
          </p>
          <Link className="text-link" href="/articles">
            從最新的一篇開始 <span>↘</span>
          </Link>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame">
            <img src="/images/morning-desk.png" alt="晨光裡的書桌與筆記" />
          </div>
          <div className="hero-stamp">慢一點<br />也沒關係</div>
          <div className="hero-note">VOL. 01<br /><span>日常的重新編排</span></div>
        </div>
      </section>

      <section id="about" className="about section-shell">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="about-grid">
          <h2>生活不是一道<br /><em>標準答案題。</em></h2>
          <div className="about-body">
            <p>肆維人生事務所，是一個談生活與人生整理的文字空間。</p>
            <p>我們從四個方向觀看自己：身體的感受、情緒的流動、關係的距離，以及正在發生的日常。希望每一篇文章，都能替你留下一小段安靜的時間。</p>
            <Link className="text-link" href="/topics">認識四個生活面向 <span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="articles" className="articles section-shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 / JOURNAL</div>
            <h2>最近寫下的事</h2>
          </div>
          <Link className="quiet-link" href="/articles">查看全部文章　↗</Link>
        </div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <article className={index === 0 ? "article-card featured" : "article-card"} key={article.title}>
              <Link className="article-image" href={`/articles/${article.slug}`}><img src={article.image} alt="" /></Link>
              <div className="article-meta"><span>{article.category}</span><span>{article.date}</span></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <Link className="card-link" href={`/articles/${article.slug}`} aria-label={`閱讀：${article.title}`}>閱讀文章　↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="topics" className="topics section-shell">
        <div className="section-kicker">03 / DIRECTIONS</div>
        <div className="topics-intro">
          <h2>從哪裡開始，<br /><em>都可以。</em></h2>
          <p>挑一個現在最靠近你的主題，讓文字陪你走一小段。</p>
        </div>
        <div className="topic-list">
          {categories.map((category) => (
            <Link className="topic-row" href={`/topics/${category.slug}`} key={category.slug}>
              <span className="topic-number">{category.number}</span>
              <strong>{category.title}</strong>
              <span className="topic-description">{category.description}</span>
              <span className="topic-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

    </main></PageFrame>
  );
}
