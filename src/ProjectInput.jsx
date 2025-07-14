import React from 'react';

function ProjectInput({ index, project, onChange }) {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'screenshot') {
      onChange({ ...project, [name]: files[0] });
    } else {
      onChange({ ...project, [name]: value });
    }
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

      <label>Tech Stack Used:</label>
      <input
        type="text"
        name="tech"
        value={project.tech}
        onChange={handleChange}
        placeholder="e.g., React, Node.js, MongoDB"
      />

      <label>Optional Link (GitHub / Demo):</label>
      <input
        type="text"
        name="link"
        value={project.link}
        onChange={handleChange}
        placeholder="e.g., https://github.com/username/project"
      />

      <label>Upload Screenshot:</label>
      <input
        type="file"
        name="screenshot"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}

export default ProjectInput;
