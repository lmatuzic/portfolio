import React from 'react'
import Project from '../components/Project'
import PersonalProject from '../components/PersonalProject'

//animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../Animation'
import { fadeInFromBottom } from '../Animation'

const Projects = () => {
  return (
    <motion.div className="container project__list" variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <h2>Company projects that I worked on</h2>
      <div className="projects">
        <Project />
      </div>

      <motion.h2 variants={fadeInFromBottom}>Personal projects that I worked on</motion.h2>
      <div className="projects">
        <PersonalProject />
      </div>
    </motion.div>
  )
}

export default Projects;

