import React from 'react'
import PropTypes from 'prop-types';
import '../styles/card.css'

const Card = ({ name, email, phone, intro, url }) => (
  <div className="card">
    <img src={url} className="card-picture" alt="card" />
    <div className="card-info">
      <div className="card-name">Name: {name}</div>
      <div className="card-email">Email: {email}</div>
      <div className="card-phone">Phone: {phone}</div>
      <div className="card-intro">Intro: {intro}</div>
    </div>
  </div>
)

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default Card
