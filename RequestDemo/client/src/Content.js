import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import ProgressStepper from './ProgressStepper'
import './content.css'

export default class Content extends Component {

  state = {
    companies: [],
    activeStep: 0,
    totalPageNum: 0
  }

  componentDidMount() {
    this.fetchCompanies(0)
  }

  fetchCompanies = (pageIndex) => axios.post('http://localhost:3001/companies', pageIndex)
    .then(res => res.data)
    .then(data => this.setState({ companies: data.companies, totalPageNum: data.totalPageNum }))

  /**
   * @param direction {Number} 1 for Next and -1 for Back
   */
  handleClick = (direction) => {
    const { activeStep } = this.state
    const newActiveSetp = activeStep + direction
    this.setState({ activeStep: newActiveSetp })
    this.fetchCompanies(newActiveSetp)
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
        <ProgressStepper
          totalPageNum={this.state.totalPageNum}
          activeStep={this.state.activeStep}
          handleNext={() => this.handleClick(1)}
          handleBack={() => this.handleClick(-1)}
        />
      </div>
    )
  }
}
