import React from 'react'

//animations
import { motion } from 'framer-motion'
import { pageAnimation, fadeIn } from '../Animation'

function Contact() {
  return (
    <motion.div className="container contact" variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <h2>Contact</h2>

      <div className="links">
        <motion.div variants={fadeIn}>Github</motion.div>
        <motion.div variants={fadeIn}>Linkedin</motion.div>
        <motion.div variants={fadeIn}>Gmail</motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
