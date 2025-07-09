import React from 'react';

function ExpInput({ index, experience, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...experience, [name]: value });
  };

  return (
    <div className="project-input">
      <h4>Experience {index + 1}</h4>

      <label>Job Title / Role:</label>
      <input
        type="text"
        name="title"
        value={experience.title}
        onChange={handleChange}
        placeholder="e.g., Frontend Developer Intern"
      />

      <label>Description / Responsibilities:</label>
      <textarea
        name="description"
        value={experience.description}
        onChange={handleChange}
        placeholder="What did you do, build, achieve?"
      />

      <label>Optional Link:</label>
      <input
        type="text"
        name="link"
        value={experience.link}
        onChange={handleChange}
        placeholder="e.g., GitHub PR, blog post, etc."
      />
    </div>
  );
}

export default ExpInput;
