const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceInFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(/Availability depends on provider participation and location/g, "Availability depends on technician availability and location");
  content = content.replace(/utility providers/gi, "utility companies");
  content = content.replace(/utility provider/gi, "utility company");
  content = content.replace(/connecting with a residential electrical provider/gi, "scheduling a residential electrician");
  content = content.replace(/connecting with a residential provider/gi, "scheduling a residential electrician");
  content = content.replace(/residential provider/gi, "residential electrician");
  content = content.replace(/provider connections/gi, "electrical services");
  content = content.replace(/residential service provider/gi, "residential electrician");
  content = content.replace(/provider participation/gi, "technician availability");
  
  // Specific phrases in files shown in grep:
  content = content.replace(/Homeowners should verify our electrician's license and insurance before work begins\./g, "Our electricians are fully licensed and insured for your peace of mind.");
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), replaceInFile);
