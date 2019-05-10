import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
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
