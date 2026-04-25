const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'templates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix the category union type
content = content.replace(/export type TemplateCategory = (.*?);/, function(match, p1) {
  return "export type TemplateCategory = " + p1.split(' | ').map(c => {
    if (c === '"CLI"') return c;
    return c.toLowerCase();
  }).join(' | ') + ";";
});

// 2. Fix the category values inside objects
content = content.replace(/category: "(Fullstack|Frontend|Backend|Mobile|Devops|Other|Monorepo|Cli|CLI)"/g, function(match, p1) {
  if (p1.toLowerCase() === 'cli') {
    return 'category: "CLI"';
  }
  return 'category: "' + p1.toLowerCase() + '"';
});

// 3. Remove .filter(Boolean) or any .filter() call
// We can use a regex that looks for .filter( ... )
content = content.replace(/\.filter\([^)]*\)/g, '');

// 4. Also remove the '(' before '[' if it was part of ([ ... ])
// Let's just find export const templates: Template[] = ([
content = content.replace(/export const templates: Template\[\] = \(\[/, 'export const templates: Template[] = [');
// And match the closing bracket
// It could be `]);` or `] );` etc.
content = content.replace(/\]\s*\)\s*;/g, '];');

// 5. Check for completely empty template slots
// Extra commas inside the array like `, ,` or `, undefined ,`
content = content.replace(/,\s*,/g, ',');
content = content.replace(/,\s*undefined\s*,/g, ',');
content = content.replace(/,\s*null\s*,/g, ',');
content = content.replace(/\[\s*undefined\s*,/g, '[');
content = content.replace(/,\s*undefined\s*\]/g, ']');

fs.writeFileSync(filePath, content, 'utf8');
console.log("File updated!");
