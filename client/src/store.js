import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/'

const initialState = {}

const multiActionMiddleware = store => next => action => {
  if (!Array.isArray(action)) return next(action)
  return action.map(a => store.dispatch(a))
}

const middleware = [thunk, multiActionMiddleware]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store