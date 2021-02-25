import React from 'react'
import projects from '../personalProjectData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

//animations
import { motion } from 'framer-motion'
import { fadeInFromBottom } from '../Animation'

function PersonalProject() {
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
            <motion.div 
              key={project.id} 
              className="project" 
              id={project.id} 
              onClick={(e) => project.link.length === 0 ? e.preventDefault() : openInNewTab(project.link)}
              variants={fadeInFromBottom}
            >
              <h4 className="project__name">{project.name}</h4>
              <div className="project__description">{project.description}</div>
              <div className="project__role">{project.role}</div>
              <div className="project__technologies">{project.technologies}</div>
              <div className="project__github">{project.github}</div>
              {project.link.length === 0 ? '' : <FontAwesomeIcon className="icon icon-right" icon={faLongArrowAltRight} /> }
            </motion.div>
          ) 
        })
      } 
    </>
  )
}

export default PersonalProject
