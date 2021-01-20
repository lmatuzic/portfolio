import React from 'react'
import projects from '../projectData.json'

function Project() {
  return (
    <>
      {
        projects.map((project) => { 
          return (
            <div key={project.id} className="project" id={project.id}>
              <h4 className="project__name">{project.name}</h4>
              <div className="project__description">{project.description}</div>
            </div>
          ) 
        })
      } 
    </>
  )
}

export default Project
