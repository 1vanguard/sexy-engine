import './custom.scss'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_wrap">
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;