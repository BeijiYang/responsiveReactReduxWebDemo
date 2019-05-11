import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import '../styles/card.css'

const Card = ({ name, email, phone, intro, url }) => {
  const [showPlaceHolder, setShowPlaceHolder] = useState(true)
  const handleImageLoaded = () => { setShowPlaceHolder(false) }
  const handleImageLoadedError = () => { setShowPlaceHolder(true) }

  return (
    <div className="card">
      <img
        src={url}
        className="card-picture"
        alt="card"
        onLoad={handleImageLoaded}
        onError={handleImageLoadedError}
        style={{ display: showPlaceHolder ? 'none' : 'block' }}
      />
      <div className="loading-picture" style={{ display: showPlaceHolder ? 'block' : 'none' }} >
        <FontAwesomeIcon icon={faCircleNotch} className="loading-picture-icon" spin size="4x" />
      </div>
      <div className="card-info">
        <div className="card-name">Name: {name}</div>
        <div className="card-email">Email: {email}</div>
        <div className="card-phone">Phone: {phone}</div>
        <div className="card-intro">Intro: {intro}</div>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default Card
