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

      {data.projects?.length > 0 && (
        <section>
          <h2>Projects</h2>
          {data.projects.map((p, i) => (
            <div key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.link && <a href={p.link} target="_blank" rel="noreferrer">🔗 Link</a>}
            </div>
          ))}
        </section>
      )}

      {data.experiences?.length > 0 && (
        <section>
          <h2>Experience</h2>
          {data.experiences.map((e, i) => (
            <div key={i}>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              {e.link && <a href={e.link} target="_blank" rel="noreferrer">🔗 Link</a>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default PortfolioPreview;
