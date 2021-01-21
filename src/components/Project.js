import React from 'react'
import projects from '../projectData.json'

function Project() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) {
      newWindow.opener = null
    } 
  }

  return (
    <>
      {
        projects.map((project) => { 
          return (
            <div key={project.id} className="project" id={project.id} onClick={() => openInNewTab(project.link)}>
              <h4 className="project__name">{project.name}</h4>
              <div className="project__description">{project.description}</div>
              <div className="project__role">{project.role}</div>
              <div className="project__technologies">{project.technologies}</div>
            </div>
          ) 
        })
      } 
    </>
  )
}

export default Project
