import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app_wrap">
      <Header />
    </div>
  );
}

const Header = () =>{
  return (
    <header className="App-header">
      <h1>Sexy-Engine</h1>
    </header>
  )
}

export default App;