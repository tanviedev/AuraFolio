// src/PortfolioPreview.jsx
import React from 'react';
import './App.css';

function PortfolioPreview({ data }) {
  if (!data.name) return <p>Please fill in the form to generate your portfolio.</p>;

  return (
    <div className="portfolio-site">
      <header>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
      </header>

      <section>
        <h2>Tech Stack</h2>
        <ul>
          {data.techStack?.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
      </section>

      {data.background && (
        <section>
          <h2>📖 Background Story</h2>
          <p>{data.background}</p>
        </section>
      )}

      {data.funFact && (
        <section>
          <h2>🎉 Fun Fact / Hobbies</h2>
          <p>{data.funFact}</p>
        </section>
      )}

      {data.devTools?.length > 0 && (
        <section>
          <h2>🛠 Preferred Dev Tools</h2>
          <ul>
            {data.devTools.split(',').map((tool, i) => (
              <li key={i}>{tool.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {data.projects?.length > 0 && (
        <section>
          <h2>📁 Projects</h2>
          {data.projects.map((p, i) => (
            <div key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.tech && <p><strong>Tech Used:</strong> {p.tech}</p>}
              {p.link && (
                <p>
                  <a href={p.link} target="_blank" rel="noreferrer">🔗 Source Code</a>
                </p>
              )}
              {p.screenshot && (
                <img
                  src={URL.createObjectURL(p.screenshot)}
                  alt={`${p.title} screenshot`}
                  style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '8px' }}
                />
              )}
            </div>
          ))}
        </section>
      )}

      {data.experiences?.length > 0 && (
        <section>
          <h2>💼 Experience</h2>
          {data.experiences.map((e, i) => (
            <div key={i}>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              {e.link && <a href={e.link} target="_blank" rel="noreferrer">🔗 Link</a>}
            </div>
          ))}
        </section>
      )}

      {data.timeline?.length > 0 && (
        <section>
          <h2>📌 Build in Public Timeline</h2>
          <ul>
            {data.timeline.map((entry, idx) => (
              <li key={idx}>
                <strong>{entry.date}</strong> — <em>{entry.title}</em>: {entry.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.resume && (
        <section>
          <h2>📄 Download Resume</h2>
          <a
            href={URL.createObjectURL(data.resume)}
            download={`${data.name}_Resume.pdf`}
            className="download-link"
          >
            📥 {data.name}'s Resume
          </a>
        </section>
      )}
    </div>
  );
}

export default PortfolioPreview;
