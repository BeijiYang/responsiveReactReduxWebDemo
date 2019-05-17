import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import message from '../locale/commonMessageEn'
import '../styles/header.css'

const Header = () => (
  <header className='header'>
    <span className='header-title'>
      {message['common.app']}
    </span>

    <FontAwesomeIcon icon={faSignInAlt} size="lg" className="header-login-icon" />
    <span className="header-login">
      {message['common.login']}
    </span>
  </header>
)

export default Header