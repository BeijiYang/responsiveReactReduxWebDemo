import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faBuilding, faEnvelope } from '@fortawesome/free-regular-svg-icons'
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
        <div className="card-name">
          <FontAwesomeIcon icon={faBuilding} className="card-info-icon" />
          {name}
        </div>
        <div className="card-email">
          <FontAwesomeIcon icon={faEnvelope} className="card-info-icon" />
          {email}
        </div>
        <div className="card-phone">
          <FontAwesomeIcon icon={faPhone} className="card-info-icon" />
          {phone}
        </div>
        <div className="card-intro">
          <FontAwesomeIcon icon={faInfoCircle} className="card-info-icon" />
          {intro}
        </div>
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
}


export default Card
