import './custom.scss'
// import $ from 'jquery'
// import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import './App.css'
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'

const App = (props) => {
  return (
    <div className="app_wrap">
      <Header state={props.state.pages} />
      <Body state={props.state.pages} addMessage={props.addMessage} />
      <Footer />
    </div>
  );
}

export default App;