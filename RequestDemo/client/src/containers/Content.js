import React, { Component } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import LoadingCard from '../components/LoadingCard'
import ProgressStepper from '../components/ProgressStepper'
import Button from '../components/CustomButton'
import config from '../config/config'
import '../styles/content.css'

const {
  API: { companies: companiesUrl },
  constants: { CARDS_PER_PAGE },
} = config

export default class Content extends Component {
  state = {
    companies: [],
    companiesOnCurrentPage: Array(CARDS_PER_PAGE).fill(null),
    activeStep: 0,
    totalPageNum: 0,
  }

  componentDidMount() {
    this.showNewCompanies(0)
  }

  fetcher = pageIndex => axios.post(companiesUrl, { pageIndex, CARDS_PER_PAGE }).then(res => res.data)

  fetchNewCompanies = async (pageIndex) => {
    const resData = await this.fetcher(pageIndex)
    const { companies, totalPageNum } = resData
    const newAllCompanies = [...this.state.companies, ...companies]
    this.setState({
      companies: newAllCompanies,
      totalPageNum: totalPageNum,
    })
    return [companies, newAllCompanies]
  }

  showAllCompanies = async (pageIndex) => {
    const [, newAllCompanies] = await this.fetchNewCompanies(pageIndex)
    this.setState({ companiesOnCurrentPage: newAllCompanies })
  }

  showSavedCompanies = (pageIndex) => {
    const { state: { companies } } = this
    const getPosition = index => index * CARDS_PER_PAGE
    const startPosition = getPosition(pageIndex)
    const endPosition = getPosition(pageIndex + 1)
    const companiesToShow = companies.slice(startPosition, endPosition)
    this.setState({ companiesOnCurrentPage: companiesToShow })
  }
  /**
   * @param direction {Number} 1 for Next and -1 for Back
   */
  handleClickStepper = (direction) => {
    window.scrollTo(0, 0)
    const newActiveSetp = this.updateActiveStep(direction)
    this.switchPageForWeb(newActiveSetp)
  }
  /**
   * @param direction {Number} 1 for Next and -1 for Back
   */
  updateActiveStep = (direction) => {
    const { activeStep } = this.state
    const newActiveSetp = activeStep + direction
    this.setState({ activeStep: newActiveSetp })
    return newActiveSetp
  }

  switchPageForWeb = (pageIndex) => {
    const savedPages = this.state.companies.length / CARDS_PER_PAGE
    const needToFetch = pageIndex >= savedPages

    needToFetch
      ? this.showNewCompanies(pageIndex)
      : this.showSavedCompanies(pageIndex)
  }

  showNewCompanies = async (pageIndex) => {
    const [newCompanies,] = await this.fetchNewCompanies(pageIndex)
    this.setState({ companiesOnCurrentPage: newCompanies })
  }

  handleClickButton = () => {
    const direction = 1 // next page
    const newActiveSetp = this.updateActiveStep(direction)
    this.showAllCompanies(newActiveSetp)
  }

  showCards = (companies) => companies.map(
    (company, index) => {
      if (!company) return <LoadingCard key={index} />
      const { id, ...info } = company
      return <Card
        key={id}
        {...info}
      />
    }
  )

  render() {
    const {
      state: { companiesOnCurrentPage, totalPageNum, activeStep },
      showCards,
      handleClickStepper,
      handleClickButton
    } = this

    const cards = showCards(companiesOnCurrentPage)

    return (
      <div className='content'>
        {cards}
        <div className='content-stepper'>
          <ProgressStepper
            totalPageNum={totalPageNum}
            activeStep={activeStep}
            handleNext={() => handleClickStepper(1)}
            handleBack={() => handleClickStepper(-1)}
          />
        </div>
        <div className='content-mobile'>
          <Button
            handleClick={() => handleClickButton(1)}
            disabled={totalPageNum === activeStep + 1}
          >
            Next Page
          </Button>
        </div>
      </div>
    )
  }
}
