import React, { useState } from 'react';
import ProjectInput from './ProjectInput';
import ExpInput from './ExpInput';

function FormSection({ onDataChange }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [techStack, setTechStack] = useState('');
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [background, setBackground] = useState('');
  const [funFact, setFunFact] = useState('');
  const [devTools, setDevTools] = useState('');
  const [timeline, setTimeline] = useState([]);
  const [resume, setResume] = useState(null);

  const updateParent = (
    updatedProjects = projects,
    updatedExperiences = experiences,
    updatedName = name,
    updatedBio = bio,
    updatedTechStack = techStack,
    updatedBackground = background,
    updatedFunFact = funFact,
    updatedDevTools = devTools,
    updatedTimeline = timeline,
    updatedResume = resume
  ) => {
    onDataChange({
      name: updatedName,
      bio: updatedBio,
      techStack: updatedTechStack.split(',').map((t) => t.trim()),
      projects: updatedProjects,
      experiences: updatedExperiences,
      background: updatedBackground,
      funFact: updatedFunFact,
      devTools: updatedDevTools,
      timeline: updatedTimeline,
      resume: updatedResume,
    });
  };

  const handleProjectChange = (idx, updatedProject) => {
    const updated = [...projects];
    updated[idx] = updatedProject;
    setProjects(updated);
    updateParent(updated, experiences);
  };

  const handleExperienceChange = (idx, updatedExperience) => {
    const updated = [...experiences];
    updated[idx] = updatedExperience;
    setExperiences(updated);
    updateParent(projects, updated);
  };

  const addProject = () => {
    const updated = [...projects, { title: '', description: '', tech: '', link: '', screenshot: null }];
    setProjects(updated);
    updateParent(updated, experiences);
  };

  const addExperience = () => {
    const updated = [...experiences, { title: '', description: '', link: '' }];
    setExperiences(updated);
    updateParent(projects, updated);
  };

  return (
    <div className="form-section">
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => {
        setName(e.target.value);
        updateParent(projects, experiences, e.target.value, bio, techStack);
      }} />

      <label>Bio:</label>
      <textarea value={bio} onChange={(e) => {
        setBio(e.target.value);
        updateParent(projects, experiences, name, e.target.value, techStack);
      }} />

      <label>Tech Stack (comma-separated):</label>
      <input type="text" value={techStack} onChange={(e) => {
        setTechStack(e.target.value);
        updateParent(projects, experiences, name, bio, e.target.value);
      }} />

      <label>Preferred Dev Tools (comma-separated):</label>
      <input type="text" value={devTools} onChange={(e) => {
        setDevTools(e.target.value);
        updateParent(projects, experiences, name, bio, techStack, background, funFact, e.target.value);
      }} />

      <label>Background Story:</label>
      <textarea value={background} onChange={(e) => {
        setBackground(e.target.value);
        updateParent(projects, experiences, name, bio, techStack, e.target.value);
      }} />

      <label>Fun Fact / Hobbies:</label>
      <input type="text" value={funFact} onChange={(e) => {
        setFunFact(e.target.value);
        updateParent(projects, experiences, name, bio, techStack, background, e.target.value);
      }} />

      <label>Upload Resume (PDF):</label>
      <input type="file" accept=".pdf" onChange={(e) => {
        const file = e.target.files[0];
        setResume(file);
        updateParent(projects, experiences, name, bio, techStack, background, funFact, devTools, timeline, file);
      }} />

      <h3>Projects</h3>
      {projects.map((project, idx) => (
        <ProjectInput
          key={idx}
          index={idx}
          project={project}
          onChange={(data) => handleProjectChange(idx, data)}
        />
      ))}
      <button onClick={addProject}>➕ Add Project</button>

      <h3>Experience</h3>
      {experiences.map((exp, idx) => (
        <ExpInput
          key={idx}
          index={idx}
          experience={exp}
          onChange={(data) => handleExperienceChange(idx, data)}
        />
      ))}
      <button onClick={addExperience}>➕ Add Experience</button>

      <h3>📌 Build in Public Timeline</h3>
      {timeline.map((entry, idx) => (
        <div key={idx} className="project-input">
          <label>Date:</label>
          <input
            type="month"
            value={entry.date}
            onChange={(e) => {
              const updated = [...timeline];
              updated[idx].date = e.target.value;
              setTimeline(updated);
              updateParent(projects, experiences, name, bio, techStack, background, funFact, devTools, updated, resume);
            }}
          />
          <label>Title:</label>
          <input
            type="text"
            value={entry.title}
            onChange={(e) => {
              const updated = [...timeline];
              updated[idx].title = e.target.value;
              setTimeline(updated);
              updateParent(projects, experiences, name, bio, techStack, background, funFact, devTools, updated, resume);
            }}
          />
          <label>Description:</label>
          <textarea
            value={entry.description}
            onChange={(e) => {
              const updated = [...timeline];
              updated[idx].description = e.target.value;
              setTimeline(updated);
              updateParent(projects, experiences, name, bio, techStack, background, funFact, devTools, updated, resume);
            }}
          />
        </div>
      ))}
      <button onClick={() => {
        const updated = [...timeline, { date: '', title: '', description: '' }];
        setTimeline(updated);
        updateParent(projects, experiences, name, bio, techStack, background, funFact, devTools, updated, resume);
      }}>➕ Add Timeline Entry</button>
    </div>
  );
}

export default FormSection;
