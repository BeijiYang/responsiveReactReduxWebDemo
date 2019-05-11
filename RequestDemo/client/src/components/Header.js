import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css'

const Header = () => (
  <header className='header'>
    <span className='header-title'>Companies</span>
    <FontAwesomeIcon icon={faSignInAlt} size="lg" className="header-login-icon" />
    <span className="header-login">Login</span>
  </header>
)

export default Header