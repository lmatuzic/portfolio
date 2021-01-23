import React from 'react'
import Project from '../components/Project'

//animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../Animation'

const Projects = () => {
  return (
    <motion.div className="container project__list" variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <h2>Projects that I worked on</h2>

      <div className="projects">
        <Project />
      </div>
    </motion.div>
  )
}

export default Projects;

