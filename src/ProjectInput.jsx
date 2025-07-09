import React from 'react';

function ProjectInput({ index, project, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...project, [name]: value });
  };

  return (
    <div className="project-input">
      <h4>Project {index + 1}</h4>

      <label>Project Title:</label>
      <input
        type="text"
        name="title"
        value={project.title}
        onChange={handleChange}
        placeholder="e.g., Personal Portfolio Website"
      />

      <label>Explanation:</label>
      <textarea
        name="description"
        value={project.description}
        onChange={handleChange}
        placeholder="What did you build? Why? How?"
      />

      <label>Optional Link:</label>
      <input
        type="text"
        name="link"
        value={project.link}
        onChange={handleChange}
        placeholder="GitHub / Live URL"
      />
    </div>
  );
}

export default ProjectInput;
