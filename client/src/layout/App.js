import React from 'react'
import { Provider } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../containers/Content'
import '../styles/App.css'

import store from '../store'


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header className="app-header" />
        <Content className="app-content" />
        <Footer className="app-footer" />
      </div>
    </Provider >
  )
}

export default App
