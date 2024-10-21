import React, { useEffect, useState } from 'react';
import './ProjectsSuggestions.css';

const ProjectsSuggestions = () => {
  const [projects, setProjects] = useState([]);

  const dummyProjects = [
    {
      _id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      projectTitle: 'Furniture Store',
      projectType: 'E-commerce',
      projectDescription: 'A website for selling furniture online',
      budget: 5000,
      deadline: '2024-12-31',
      additionalNotes: 'Need a responsive and modern design',
    },
    {
      _id: '2',
      name: 'Jane Smith',
      email: 'janesmith@gmail.com',
      projectTitle: 'Blog Website',
      projectType: 'Blog',
      projectDescription: 'A simple and elegant blog site',
      budget: 1500,
      deadline: '2024-11-15',
      additionalNotes: 'Should be easy to update and maintain',
    },
  ];

  useEffect(() => {
    fetch('http://localhost:5000/api/projects/suggestions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProjects([...dummyProjects, ...data]))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setProjects(dummyProjects); // Use dummy data if API fails
      });
  }, []);

  // Function to handle project deletion
  const handleDelete = (projectId) => {
    fetch(`http://localhost:5000/api/projects/suggestions/${projectId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error deleting project');
        }
        // Update the project list after successful deletion
        setProjects(projects.filter((project) => project._id !== projectId));
      })
      .catch((error) => {
        console.error('Error deleting project:', error);
      });
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Project Suggestions</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h2 className="project-card-title">{project.projectTitle}</h2>
            <p className="project-card-type"><strong>Type:</strong> {project.projectType}</p>
            <p className="project-card-description"><strong>Description:</strong> {project.projectDescription}</p>
            <p className="project-card-budget"><strong>Budget:</strong> ${project.budget}</p>
            <p className="project-card-deadline"><strong>Deadline:</strong> {project.deadline}</p>
            <p className="project-card-client"><strong>Client:</strong> {project.name} ({project.email})</p>
            <p className="project-card-notes"><strong>Notes:</strong> {project.additionalNotes}</p>
            <button className="delete-btn" onClick={() => handleDelete(project._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSuggestions;
