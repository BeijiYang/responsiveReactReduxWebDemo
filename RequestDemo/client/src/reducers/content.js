import {
  UPDATE_COMPANIES,
  SHOW_ALL_COMPANIES,
  SHOW_NEW_COMPANIES,
  SHOW_SAVED_COMPANIES,
  UPDATE_ACTIVE_STEP
} from '../actions/types'
import config from '../config/config'

const {
  constants: { CARDS_PER_PAGE },
} = config

const _getPosition = pageIndex => pageIndex * CARDS_PER_PAGE

const initialState = {
  companies: [],
  companiesOnCurrentPage: Array(CARDS_PER_PAGE).fill(null),
  activeStep: 0,
  totalPageNum: 0,
}

export default (state = initialState, { type, payload }) => {

  switch (type) {
    case UPDATE_COMPANIES:
      const { companies, totalPageNum } = payload
      const newAllCompanies = [...state.companies, ...companies]
      return {
        ...state,
        companies: newAllCompanies,
        totalPageNum: totalPageNum,
      }

    case SHOW_ALL_COMPANIES:
      return {
        ...state,
        companiesOnCurrentPage: state.companies,
      }

    case SHOW_NEW_COMPANIES:
      return {
        ...state,
        companiesOnCurrentPage: payload,
      }

    case SHOW_SAVED_COMPANIES:
      const pageIndex = payload
      const start = _getPosition(pageIndex)
      const end = _getPosition(pageIndex + 1)
      const companiesToShow = state.companies.slice(start, end)
      return {
        ...state,
        companiesOnCurrentPage: companiesToShow
      }

    case UPDATE_ACTIVE_STEP:
      const direction = payload
      return {
        ...state,
        activeStep: state.activeStep + direction
      }

    default:
      return state
  }
}
