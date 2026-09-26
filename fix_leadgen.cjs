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

  // Footer text
  content = content.replace(
    /Helping homeowners connect with independent local residential electrical service providers/g, 
    "Providing expert residential electrical services to homeowners"
  );
  content = content.replace(
    /<div className="mt-8 border-t border-white\/10 pt-6 text-sm leading-relaxed text-white\/70">[\s\S]*?Disclaimer: Burnett Electric is a free service[\s\S]*?<\/div>/g,
    ""
  );

  // Common phrases
  content = content.replace(/helps ([\w\s]+) homeowners connect with independent local residential electrical service providers/g, "provides $1 homeowners with expert residential electrical services");
  content = content.replace(/helps homeowners connect with independent local providers/g, "provides expert residential electrical services");
  content = content.replace(/connect with a local provider/gi, "get professional service");
  content = content.replace(/connect with a provider/gi, "get professional service");
  content = content.replace(/connecting with a provider/gi, "getting professional service");
  content = content.replace(/connecting with an independent local residential provider/gi, "hiring an expert residential electrician");
  content = content.replace(/connecting with an independent local provider/gi, "scheduling an expert electrician");
  content = content.replace(/connecting with an independent provider/gi, "scheduling an expert electrician");
  content = content.replace(/independent local provider/gi, "expert electrician");
  content = content.replace(/independent local residential provider/gi, "expert residential electrician");
  content = content.replace(/an independent provider/gi, "our expert electricians");
  content = content.replace(/independent provider/gi, "expert electrician");
  content = content.replace(/a provider/gi, "an expert electrician");
  content = content.replace(/independent local providers/gi, "expert electricians");
  content = content.replace(/independent providers/gi, "expert electricians");
  content = content.replace(/local providers/gi, "expert electricians");
  content = content.replace(/local provider/gi, "expert electrician");
  content = content.replace(/the provider/gi, "our electrician");
  
  // Specific FAQs in location/service pages
  content = content.replace(/How should I verify a provider in ([^?]+)\?/g, "Are your electricians licensed and insured in $1?");
  content = content.replace(/Homeowners should verify that the hired provider furnishes the license and insurance required for the work\./g, "Yes, our electricians are fully licensed, insured, and highly trained for all residential electrical work.");
  content = content.replace(/How can I connect with a provider in ([^?]+)\?/g, "How can I schedule an electrician in $1?");
  content = content.replace(/Call to request help connecting with an independent local residential provider\./gi, "Call us today to schedule an expert residential electrician.");
  content = content.replace(/Call to request help connecting with a provider for/gi, "Call us today to schedule expert service for");
  content = content.replace(/Call to request help connecting with an expert electrician for/gi, "Call us today to schedule expert service for");
  content = content.replace(/Request help connecting with a provider for/gi, "Get expert electrical service for");
  content = content.replace(/Request help connecting with an expert electrician for/gi, "Get expert electrical service for");
  content = content.replace(/How quickly can a provider help\?/g, "How quickly can an electrician help?");
  content = content.replace(/How quickly can an expert electrician help\?/g, "How quickly can an electrician help?");
  content = content.replace(/Availability varies by provider participation, location, technician availability, demand, and appointment capacity\./gi, "Availability varies by location, technician availability, and demand, but we always strive to respond as quickly as possible.");
  content = content.replace(/Provider participation, location, technician availability, demand, and appointment capacity affect availability\./gi, "Availability varies by location, technician availability, and demand, but we always strive to respond as quickly as possible.");
  
  // Index page specific
  content = content.replace(/Provider connections/g, "Satisfied Customers");
  content = content.replace(/Call connection/g, "Direct Service");
  content = content.replace(/Call to request help connecting with an expert electrician in your area\./gi, "Call us to get immediate help from our expert electricians in your area.");
  content = content.replace(/Get practical information before choosing an expert electrician\./gi, "Get practical guidance and expert solutions for your home.");
  content = content.replace(/How can I connect with a residential provider\?/g, "How can I schedule a residential electrician?");
  content = content.replace(/Call 205-634-8185 to request help connecting with an independent local residential electrical service provider\./gi, "Call 205-634-8185 to schedule an expert local residential electrician.");
  content = content.replace(/Call 205-634-8185 to get professional service\./g, "Call 205-634-8185 to schedule an expert electrician.");
  content = content.replace(/Are providers independent\?/g, "Are your electricians licensed and insured?");
  content = content.replace(/Yes\. Providers are independent\. Homeowners should verify that the provider has the license and insurance required for the work\./gi, "Yes, our electricians are fully licensed, insured, and trained to handle all residential electrical work safely.");
  content = content.replace(/You can call to request help connecting with an expert electrician for residential sparks, burning smells, partial outages, or storm damage\. Availability depends on provider participation and location\./gi, "You can call us for residential sparks, burning smells, partial outages, or storm damage. We will dispatch an electrician as soon as possible based on availability.");
  
  content = content.replace(/Independent Providers/g, "Expert Electricians");
  content = content.replace(/Request Help Connecting/g, "Request Service Now");
  content = content.replace(/Residential electrical information and connections for homeowners\. Request help connecting with an expert electrician\./g, "Expert residential electrical services for homeowners. Contact us to schedule an electrician.");
  content = content.replace(/Residential electrical service connections for homeowners/g, "Residential electrical services for homeowners");
  content = content.replace(/residential electrical service connections/gi, "residential electrical services");
  content = content.replace(/residential electrical connections/gi, "residential electrical services");
  
  // Fix specific LocationPageLayout issues
  content = content.replace(/This site helps (.*?) homeowners connect with independent local residential electrical service providers\./g, "Burnett Electric provides $1 homeowners with expert residential electrical services.");
  content = content.replace(/This site helps (.*?) homeowners connect with expert electricians\./g, "Burnett Electric provides $1 homeowners with expert residential electrical services.");
  content = content.replace(/helps (.*?) homeowners connect with expert electricians/g, "provides $1 homeowners with expert residential electrical services");
  content = content.replace(/The residential electrical information was clear and helped me know what to ask an expert electrician about a sparking breaker box\./g, "The electrician was very knowledgeable and quickly fixed my sparking breaker box.");
  content = content.replace(/The information helped me prepare questions for an expert electrician about a residential electrical project\./g, "They answered all my questions about my residential electrical project.");
  content = content.replace(/The residential information was clear and helped me prepare for an expert electrician conversation\./g, "They were clear and transparent, helping me understand everything about my electrical project.");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), replaceInFile);
