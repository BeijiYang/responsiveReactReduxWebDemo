import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'

const Footer = () => (
  <footer className='footer'>
    <span className='footer-self-intro'>I'm Yujie Wang, a front end developer.</span>
    <a href="https://github.com/BeijiYang" className='footer-link'>
      <FontAwesomeIcon icon={faGithub} size="lg" className="footer-icon" />
      <div>About Me</div>
    </a>
  </footer>
)

export default Footer