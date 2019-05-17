import axios from 'axios'
import {
  SHOW_ALL_COMPANIES,
  SHOW_NEW_COMPANIES,
  SHOW_SAVED_COMPANIES,
  UPDATE_COMPANIES,
  UPDATE_ACTIVE_STEP
} from './types'
import config from '../config/config'


const {
  API: { companies: companiesUrl },
  constants: { CARDS_PER_PAGE },
} = config

const _fetcher = pageIndex => axios.post(companiesUrl, { pageIndex, CARDS_PER_PAGE }).then(res => res.data)

/**
 * @param {Number} direction1 for Next and -1 for Back
 */
const updateActiveStep = direction => dispatch => dispatch({
  type: UPDATE_ACTIVE_STEP,
  payload: direction
})

const showAllCompanies = pageIndex => async dispatch => {
  const data = await _fetcher(pageIndex)
  const actions = [{
    type: UPDATE_COMPANIES,
    payload: data
  }, {
    type: SHOW_ALL_COMPANIES,
  }]
  dispatch(actions)
}

const showNewCompanies = pageIndex => async dispatch => {
  const data = await _fetcher(pageIndex)
  const actions = [{
    type: UPDATE_COMPANIES,
    payload: data
  }, {
    type: SHOW_NEW_COMPANIES,
    payload: data.companies
  }]
  dispatch(actions)
}

const showSavedCompanies = pageIndex => dispatch => dispatch({
  type: SHOW_SAVED_COMPANIES,
  payload: pageIndex
})

export {
  updateActiveStep,
  showAllCompanies,
  showNewCompanies,
  showSavedCompanies
}
