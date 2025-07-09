import React, { useState } from 'react';
import ProjectInput from './ProjectInput';
import ExpInput from './ExpInput';

function FormSection({ onDataChange }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [techStack, setTechStack] = useState('');
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);

  // Centralized update function with explicit values
  const updateParent = (
    updatedProjects = projects,
    updatedExperiences = experiences,
    updatedName = name,
    updatedBio = bio,
    updatedTechStack = techStack
  ) => {
    onDataChange({
      name: updatedName,
      bio: updatedBio,
      techStack: updatedTechStack.split(',').map((t) => t.trim()),
      projects: updatedProjects,
      experiences: updatedExperiences,
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
    const updated = [...projects, { title: '', description: '', tech: '', link: '' }];
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
      <input
        type="text"
        value={name}
        onChange={(e) => {
          const newName = e.target.value;
          setName(newName);
          updateParent(projects, experiences, newName, bio, techStack);
        }}
      />

      <label>Bio:</label>
      <textarea
        value={bio}
        onChange={(e) => {
          const newBio = e.target.value;
          setBio(newBio);
          updateParent(projects, experiences, name, newBio, techStack);
        }}
      />

      <label>Tech Stack (comma-separated):</label>
      <input
        type="text"
        value={techStack}
        onChange={(e) => {
          const newTech = e.target.value;
          setTechStack(newTech);
          updateParent(projects, experiences, name, bio, newTech);
        }}
      />

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
    </div>
  );
}

export default FormSection;
