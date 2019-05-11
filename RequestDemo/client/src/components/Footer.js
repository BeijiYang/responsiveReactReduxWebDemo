import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import config from '../config/config'
import message from '../locale/commonMessageEn'
import '../styles/footer.css'

const {
  API: { myGithub }
} = config

const Footer = () => (
  <footer className='footer'>
    <span className='footer-self-intro'>{message['footer.intro']}</span>
    <a href={myGithub} className='footer-link'>
      <FontAwesomeIcon icon={faGithub} size="lg" className="footer-icon" />
      <div>{message['footer.link']}</div>
    </a>
  </footer>
)

export default Footer