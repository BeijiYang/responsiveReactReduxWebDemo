import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import ProgressStepper from './ProgressStepper'
import './content.css'

export default class Content extends Component {
  constructor() {
    super()
    this.state = {
      companies: [],
      totalPageNum: 0
    }
  }
  componentDidMount() {
    axios.post('http://localhost:3001/companies')
      .then(res => res.data)
      .then(data => this.setState({ companies: data.companies, totalPageNum: data.totalPageNum }))
  }
  render() {

    const cards = this.state.companies.map(
      company => {
        const { id, name, email, phone, intro, url } = company
        return <Card key={id} name={name} email={email} phone={phone} intro={intro} url={url} />
      }
    )
    return (
      <div className='content'>
        {cards}
        <ProgressStepper totalPageNum={this.state.totalPageNum} />
      </div>
    )
  }
}
