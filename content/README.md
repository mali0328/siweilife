# 文章內容

每篇文章放在 `content/posts/`，檔名可以使用日期加英文 slug，例如：

```text
2026-08-01-leave-some-space.md
```

文章檔案需要包含以下欄位：

```md
---
slug: leave-some-space
category: 生活節奏
categorySlug: life-rhythm
date: 2026.08.01
title: 文章標題
excerpt: 首頁與列表顯示的摘要
image: /images/window-space.png
readingTime: 4 分鐘閱讀
---

這裡開始寫文章內容。

空一行即可分隔下一段。
```

每篇文章都必須有一張不重複的圖片。若省略 `image`，更新腳本會依標題、分類與內容自動選擇尚未使用的素材；素材用完時會停止更新，不會重複使用圖片。

新增或修改檔案後，GitHub Actions 會在更新時自動產生文章資料並執行網站建置。
