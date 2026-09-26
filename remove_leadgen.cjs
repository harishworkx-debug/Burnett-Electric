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

  // "request help getting professional service" -> "schedule an expert residential electrician"
  content = content.replace(/request help getting professional service/gi, "schedule an expert residential electrician");
  
  // "call to request help hiring an expert residential electrician" -> "call us today to schedule an expert residential electrician"
  content = content.replace(/Call to request help hiring an expert residential electrician/gi, "Call us today to schedule an expert residential electrician");
  
  // "Request help scheduling a residential electrician" -> "Schedule a residential electrician"
  content = content.replace(/Request help scheduling a residential electrician/gi, "Schedule a residential electrician");
  content = content.replace(/call to request help scheduling/gi, "call to schedule");

  // "Call to request help connecting with a residential electrician" -> "Call us today to schedule a residential electrician"
  content = content.replace(/Call to request help connecting with a residential electrician/gi, "Call us today to schedule a residential electrician");
  
  // "Information and connections for homeowners seeking residential electrical help" -> "Expert electrical services and solutions for homeowners"
  content = content.replace(/Information and connections for homeowners seeking residential electrical help/gi, "Expert electrical services and solutions for homeowners.");
  
  // "Clear residential information and straightforward connections for homeowners." -> "Clear residential information and reliable electrical services for homeowners."
  content = content.replace(/Clear residential information and straightforward connections for homeowners/gi, "Clear residential information and reliable electrical services for homeowners");

  // "Connect With a expert electrician" -> "Contact an Expert Electrician"
  content = content.replace(/Connect With a expert electrician/gi, "Contact an Expert Electrician");
  
  // "Connect with an expert electrician for residential repairs, upgrades, and installations." -> "Hire an expert electrician for residential repairs, upgrades, and installations."
  content = content.replace(/Connect with an expert electrician for/gi, "Hire an expert electrician for");

  // "Residential Service Connections" -> "Residential Electrical Services"
  content = content.replace(/Residential Service Connections/gi, "Residential Electrical Services");
  
  // "generator installation connections" -> "generator installations"
  content = content.replace(/generator installation connections/gi, "generator installations");

  // "EV charger installation connections" -> "EV charger installations"
  content = content.replace(/EV charger installation connections/gi, "EV charger installations");

  // "emergency electrical connection requests" -> "emergency electrical services"
  content = content.replace(/emergency electrical connection requests/gi, "emergency electrical services");
  
  // "Request a residential electrical service connection" -> "Request residential electrical service"
  content = content.replace(/Request a residential electrical service connection/gi, "Request residential electrical service");
  
  // "Call for Connection Help" -> "Call for Emergency Service"
  content = content.replace(/Call for Connection Help/gi, "Call for Emergency Service");
  
  // "Connection Request" -> "Service Request"
  content = content.replace(/Connection Request/gi, "Service Request");
  
  // "Local Connections" -> "Local Service Area"
  content = content.replace(/Local Connections/gi, "Local Service Area");
  
  // "Direct Support" -> "Direct Service"
  content = content.replace(/Direct Support/gi, "Direct Service");

  // "call to request help getting professional service" -> "call to request professional service"
  content = content.replace(/call to request help getting professional service/gi, "call to request professional service");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), replaceInFile);
