import React from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div className="app_wrap">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;