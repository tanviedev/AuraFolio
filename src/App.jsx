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

      <h1>🧠 Developer Portfolio Generator</h1>

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
          📥Download Portfolio ZIP
        </button>
    </div>
 );
}

export default App;
