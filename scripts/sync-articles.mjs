import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const inbox = path.resolve(root, "..", "文章");
const destination = path.join(root, "content", "posts");

if (!fs.existsSync(inbox)) {
  console.log("找不到文章資料夾，略過同步：../文章");
  process.exit(0);
}

fs.mkdirSync(destination, { recursive: true });
const files = fs.readdirSync(inbox).filter((file) => file.endsWith(".md") && file !== "README.md");

for (const file of files) {
  fs.copyFileSync(path.join(inbox, file), path.join(destination, file));
}

console.log(`已同步 ${files.length} 篇文章到 website/content/posts/`);
