import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import ProgressStepper from './ProgressStepper'
import config from './config'
import './content.css'

const { API: { companies } } = config

export default class Content extends Component {

  state = {
    companies: [],
    activeStep: 0,
    totalPageNum: 0
  }

  componentDidMount() {
    this.fetchCompanies(0)
  }

  fetchCompanies = (pageIndex) => axios.post(companies, pageIndex)
    .then(res => res.data)
    .then(data => {
      const { companies, totalPageNum } = data
      this.setState({
        companies: [...this.state.companies, ...companies],
        totalPageNum: totalPageNum
      })
    })

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
        const { id, ...info } = company
        return <Card
          key={id}
          {...info}
        />
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
