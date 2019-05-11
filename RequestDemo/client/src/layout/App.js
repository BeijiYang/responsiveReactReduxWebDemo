import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../containers/Content'
import '../styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header className="app-header" />
      <Content className="app-content" />
      <Footer className="app-footer" />
    </div>
  );
}

export default App;
