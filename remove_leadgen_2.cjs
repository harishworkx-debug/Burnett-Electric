const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function replaceInFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  content = content.replace(/Emergency Residential Electrical Help/g, "Emergency Residential Electrical Services");
  content = content.replace(/Emergency Electrical Help/g, "Emergency Electrical Services");
  content = content.replace(/Residential Electrical Help/g, "Residential Electrical Services");
  content = content.replace(/electrical help for homeowners/gi, "electrical services for homeowners");
  content = content.replace(/Need Help With a Residential Electrical Issue\?/g, "Need an Expert Residential Electrician?");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), replaceInFile);
