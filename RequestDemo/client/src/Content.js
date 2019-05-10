import React, { Component } from 'react'
import Card from './Card'
import ProgressStepper from './ProgressStepper'
import './content.css'

export default class Content extends Component {
  render() {
    const data = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    const name = 'NameCompany'
    const email = 'email@emai.com'
    const phone = '0123456789'
    const intro = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    const url = 'asdfasdf'
    const cards = data.map((i, idx) => <Card key={idx} name={name} email={email} phone={phone} intro={intro} url={url} />)
    return (
      <div className='content'>
        {cards}
        <ProgressStepper />
      </div>
    )
  }
}
