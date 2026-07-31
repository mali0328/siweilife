import Link from "next/link";

export function SiteHeader() {
  return (
    <nav className="nav-wrap" aria-label="主要導覽">
      <Link className="brand" href="/">
        <img className="site-logo" src="/images/logo-symbol.png" alt="肆維人生事務所 Logo" />
      </Link>
      <div className="nav-links">
        <Link href="/about">關於事務所</Link>
        <Link href="/articles">文章</Link>
        <Link href="/topics">生活主題</Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer section-shell">
      <Link className="footer-brand" href="/">
        <img className="site-logo" src="/images/logo-symbol.png" alt="肆維人生事務所 Logo" />
      </Link>
      <p>給正在練習成為自己的人。</p>
      <span>© 2026 Four Dimensions of Life</span>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}
