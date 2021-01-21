import React from 'react'
import { motion } from 'framer-motion'
import Project from '../components/Project'

const Projects = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <div className="container">
      <motion.h2 
          variants={ titleAnimation }
          initial="hidden"
          animate="show"
        >
        Projects
      </motion.h2>

      <div className="projects">
        <Project />
      </div>
    </div>
  )
}

export default Projects;

