import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: {  } }
  }

  return (
    <div>
      <motion.h1 
        variants={ titleAnimation }
        initial="hidden"
        animate="show"
      >
        Projects
      </motion.h1>
    </div>
  )
}

export default Projects;

