// src/utils/exportPortfolio.js
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export async function exportPortfolio(data) {
  const zip = new JSZip();

  // 📄 HTML template
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${data.name || 'My Portfolio'}</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
      <h2>Tech Stack</h2>
      <ul>
        ${data.techStack.map((tech) => `<li>${tech}</li>`).join('')}
      </ul>

      <h2>Projects</h2>
      ${data.projects.map(
        (proj) => `
        <div>
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          ${proj.link ? `<a href="${proj.link}" target="_blank">🔗 Link</a>` : ''}
        </div>
      `
      ).join('')}

      <h2>Experience</h2>
      ${data.experiences.map(
        (exp) => `
        <div>
          <h3>${exp.title}</h3>
          <p>${exp.description}</p>
          ${exp.link ? `<a href="${exp.link}" target="_blank">🔗 Link</a>` : ''}
        </div>
      `
      ).join('')}
    </div>
  </body>
  </html>
  `;

  // 🎨 CSS Template
  const css = `
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #f8f8f8;
      color: #222;
    }
    .container {
      max-width: 800px;
      margin: auto;
    }
    h1 {
      color: #AA00FF;
    }
    a {
      color: #007acc;
    }
  `;

  // Add to ZIP
  zip.file('index.html', html);
  zip.file('style.css', css);

  // Trigger download
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'aurafolio.zip');
}
