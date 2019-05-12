import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import LoadingCard from '../components/LoadingCard'
import ProgressStepper from '../components/ProgressStepper'
import Button from '../components/CustomButton'
import config from '../config/config'
import message from '../locale/commonMessageEn'
import {
  showAllCompanies,
  showNewCompanies,
  showSavedCompanies,
  updateActiveStep
} from '../actions/content'
import '../styles/content.css'

const {
  constants: { CARDS_PER_PAGE },
} = config

class Content extends Component {

  componentDidMount() {
    const { props: { activeStep, showAllCompanies } } = this
    showAllCompanies(activeStep)
  }

  /**
   * @param direction {Number} 1 for Next and -1 for Back
   */
  handleClickStepper = direction => {
    window.scrollTo(0, 0)
    this.props.updateActiveStep(direction)
    this.switchPageForWeb(direction)
  }

  // check if the app need to fetch new data
  switchPageForWeb = direction => {
    const { props: { activeStep, companies, showNewCompanies, showSavedCompanies } } = this
    const nextPageIndex = activeStep + direction
    const savedPages = companies.length / CARDS_PER_PAGE
    const needToFetch = nextPageIndex === savedPages

    needToFetch
      ? showNewCompanies(nextPageIndex)
      : showSavedCompanies(nextPageIndex)
  }

  handleClickButton = () => {
    const { props: { activeStep, updateActiveStep, showAllCompanies } } = this
    const direction = 1 // next page
    updateActiveStep(direction)
    const nextPageIndex = activeStep + direction
    showAllCompanies(nextPageIndex)
  }

  showCards = companies => companies.map(
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
      props: { companiesOnCurrentPage, totalPageNum, activeStep },
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
            {message['common.nextpage']}
          </Button>
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  companies: PropTypes.array.isRequired,
  companiesOnCurrentPage: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  totalPageNum: PropTypes.number.isRequired,
  showAllCompanies: PropTypes.func.isRequired,
  showNewCompanies: PropTypes.func.isRequired,
  showSavedCompanies: PropTypes.func.isRequired,
  updateActiveStep: PropTypes.func.isRequired,
}

const mapStateToProps = ({
  content: {
    companies,
    companiesOnCurrentPage,
    activeStep,
    totalPageNum
  }
}) => ({
  companies,
  companiesOnCurrentPage,
  activeStep,
  totalPageNum,
})

export default connect(mapStateToProps, {
  showAllCompanies,
  showNewCompanies,
  showSavedCompanies,
  updateActiveStep
})(Content)
