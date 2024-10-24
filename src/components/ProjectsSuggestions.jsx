import React, { useEffect, useState } from 'react';
import './ProjectsSuggestions.css';

const ProjectsSuggestions = () => {
  const [projects, setProjects] = useState([]);

  // Define your dummy projects here (optional)
  const dummyProjects = [
    {
      _id: 'dummy1',
      projectTitle: 'Dummy Project 1',
      projectType: 'Web Development',
      projectDescription: 'This is a dummy project description.',
      budget: 1000,
      deadline: '2024-12-31',
      name: 'John Doe',
      email: 'john.doe@example.com',
      additionalNotes: 'This is some additional information about the project.',
    },
    // Add more dummy projects if needed
  ];

  // Fetch projects from the backend API
  useEffect(() => {
    fetch('https://freelancing-website-eta.vercel.app/api/projects/suggestions') // Ensure this URL matches your backend server
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProjects([...dummyProjects, ...data]); // Combine dummy and fetched projects
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setProjects(dummyProjects); // Use dummy data if API call fails
      });
  }, []);

  // Function to handle project deletion
  const handleDelete = (projectId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (confirmDelete) {
      fetch(`https://freelancing-website-eta.vercel.app/api/projects/suggestions/${projectId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error deleting project');
          }
          // Update the project list after successful deletion
          setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
        })
        .catch((error) => {
          console.error('Error deleting project:', error);
        });
    }
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
