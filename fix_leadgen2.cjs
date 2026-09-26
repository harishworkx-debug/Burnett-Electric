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

  content = content.replace(/Yes\. Providers are independent\. Homeowners should verify that our electrician has the license and insurance required for the work\./g, "Yes, our electricians are fully licensed, insured, and trained to handle all residential electrical work safely.");
  
  content = content.replace(/Request help connecting with an independent residential electrical service provider in Tuscaloosa\./gi, "Contact our expert residential electrical service team in Tuscaloosa.");
  content = content.replace(/Call or send a request for help connecting with an independent residential service provider in Tuscaloosa, Northport, or Birmingham\./gi, "Call or send a request to schedule an expert residential electrician in Tuscaloosa, Northport, or Birmingham.");
  content = content.replace(/Learn how Burnett Electric helps homeowners connect with independent residential electrical service providers\./gi, "Learn how Burnett Electric provides expert residential electrical services to homeowners.");
  
  // Look closely at LocationPageLayout.tsx
  content = content.replace(/This site helps (\{.*?\}) homeowners connect with independent local residential electrical service providers for homes, apartments, and other residential properties\./g, "Burnett Electric provides $1 homeowners with expert residential electrical services for homes, apartments, and other residential properties.");
  
  // CTASection
  content = content.replace(/Connect with an independent local residential service provider in Tuscaloosa, Northport or Birmingham\./g, "Schedule an expert residential electrician in Tuscaloosa, Northport or Birmingham.");
  
  // provider search
  content = content.replace(/an independent local residential provider/gi, "an expert residential electrician");
  content = content.replace(/independent residential electrical service provider/gi, "expert residential electrical team");
  content = content.replace(/independent residential service provider/gi, "expert residential electrician");
  content = content.replace(/independent residential providers/gi, "expert residential electricians");
  content = content.replace(/an independent provider/gi, "an expert electrician");
  content = content.replace(/independent provider/gi, "expert electrician");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), replaceInFile);
