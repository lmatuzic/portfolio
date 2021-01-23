import React from 'react'

//animations
import { motion } from 'framer-motion'
import { pageAnimation, fadeIn } from '../Animation'

function Home() {
  return (
    <motion.div className="homepage" variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <div className="container">
        <div className="profile__info">
          <h1>Luka Matuzić</h1>
          <motion.h2 variants={fadeIn}>Web developer</motion.h2>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
