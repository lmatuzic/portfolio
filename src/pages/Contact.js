import React from 'react'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

//animations
import { motion } from 'framer-motion'
import { pageAnimation, fadeIn } from '../Animation'

function Contact() {
  return (
    <motion.div className="container contact" variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <h2>Contact</h2>

      <div className="links">
        <motion.div variants={fadeIn}>
          <a href="mailto: luka.matuzic1@gmail.com">
            <FontAwesomeIcon className="icon icon-mail" icon={faEnvelope} />
            Gmail
          </a>
        </motion.div>

        <motion.div variants={fadeIn}>
          <a href="https://www.linkedin.com/in/luka-matuzi%C4%87-a07440158/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon icon-linkedin" icon={faLinkedin} />
            Linkedin
          </a>
        </motion.div>

        <motion.div variants={fadeIn}>
          <a href="https://github.com/lmatuzic" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon icon-github" icon={faGithub} />
            Github
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
