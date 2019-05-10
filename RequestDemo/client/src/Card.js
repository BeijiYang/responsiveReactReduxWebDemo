import React from 'react'
import './card.css'

const Card = ({ name, email, phone, intro, url }) => (
  <div className="card">
    <img src='https://picsum.photos/300/300' className="card-picture" alt="card" />
    <div className="card-info">
      <div className="card-name">name: {name}</div>
      <div className="card-email">email: {email}</div>
      <div className="card-phone">phone: {phone}</div>
      <div className="card-intro">intro: {intro}</div>
    </div>
  </div>
)

export default Card
