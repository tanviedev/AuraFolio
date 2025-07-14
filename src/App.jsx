// === App.jsx ===
import { useState } from 'react';
import RotatingText from './RotatingText';
import FormSection from './FormSection';
import PortfolioPreview from './PortfolioPreview';
import { exportPortfolio } from './utils/exportPortfolio';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState({});
  const rotatingWords = ['git', 'port', 'core', 'build', 'craft', 'stack', 'code'];
  const [showGeneratedSite, setShowGeneratedSite] = useState(false);

  return (
    <div className="container">
      <div className="rotating-wrapper">
        <RotatingText texts={rotatingWords} />
        <span>folio</span>
      </div>

      <h1>🧑‍💻 Developer Portfolio Generator</h1>

      <FormSection onDataChange={setPortfolioData} />

      <div className="preview-section">
        <h2>👀 Live Preview</h2>
        <h3>{portfolioData.name}</h3>
        <p>{portfolioData.bio}</p>

        <p>
          <strong>Tech Stack:</strong>{' '}
          {portfolioData.techStack?.map((tech, idx) => (
            <span key={idx} className="tag">{tech}</span>
          ))}
        </p>

        {portfolioData.background && (
          <>
            <h3>📖 Background Story</h3>
            <p>{portfolioData.background}</p>
          </>
        )}

        {portfolioData.funFact && (
          <p><strong>🎉 Fun Fact:</strong> {portfolioData.funFact}</p>
        )}

        {portfolioData.devTools && (
          <p><strong>🔠 Preferred Tools:</strong>{' '}
            {portfolioData.devTools?.split(',').map((tool, idx) => (
              <span key={idx} className="tag">{tool.trim()}</span>
            ))}
          </p>
        )}

        {portfolioData.projects?.length > 0 && (
          <>
            <h3>📁 Projects</h3>
            {portfolioData.projects.map((proj, i) => (
              <div key={i} className="project-preview">
                <h4>{proj.title}</h4>
                <p>{proj.description}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noreferrer">🔗 Project Link</a>
                )}
                {proj.screenshot && (
                  <img src={proj.screenshot} alt="project screenshot" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }} />
                )}
              </div>
            ))}
          </>
        )}

        {portfolioData.experiences?.length > 0 && (
          <>
            <h3>💼 Experience</h3>
            {portfolioData.experiences.map((exp, i) => (
              <div key={i} className="project-preview">
                <h4>{exp.title}</h4>
                <p>{exp.description}</p>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer">🔗 Link</a>
                )}
              </div>
            ))}
          </>
        )}

        {portfolioData.timeline?.length > 0 && (
          <>
            <h3>📌 Build in Public Timeline</h3>
            <ul>
              {portfolioData.timeline.map((entry, idx) => (
                <li key={idx}>
                  <strong>{entry.date}</strong> — <em>{entry.title}</em>: {entry.description}
                </li>
              ))}
            </ul>
          </>
        )}

        {portfolioData.resume && (
          <a href={portfolioData.resume} download className="download-btn">
            📄 Download Resume
          </a>
        )}

        {showGeneratedSite && (
          <div className="site-preview">
            <h2>🌐 Portfolio Website Output</h2>
            <PortfolioPreview data={portfolioData} />
          </div>
        )}
      </div>

      <button onClick={() => setShowGeneratedSite(true)}>
        🚀 Generate Portfolio Site
      </button>
      <button onClick={() => exportPortfolio(portfolioData)}>
        📅Download Portfolio ZIP
      </button>
    </div>
  );
}

export default App;