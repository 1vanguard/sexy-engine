import React from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';

const App = () => {
  return (
    <div className="app_wrap">
      <Header />
      <Body />
    </div>
  );
}

export default App;