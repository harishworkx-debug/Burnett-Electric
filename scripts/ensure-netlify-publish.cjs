const fs = require("fs");
const path = require("path");

const distDir = path.resolve("dist");
const clientDir = path.resolve("dist", "client");

if (fs.existsSync(distDir)) {
  if (!fs.existsSync(clientDir)) {
    fs.mkdirSync(clientDir, { recursive: true });
  }
  const entries = fs.readdirSync(distDir);
  for (const entry of entries) {
    if (entry === "client") continue;
    const srcPath = path.join(distDir, entry);
    const destPath = path.join(clientDir, entry);
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
  console.log("Successfully created and synchronized dist/client for Netlify compatibility.");
}
