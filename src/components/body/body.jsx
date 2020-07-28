import React from 'react'
import {Route} from 'react-router-dom'
import MainPage from '../main_page/main_page'
import About from '../about/about'
import Portfolio from '../portfolio/portfolio'

const Body = () =>{
    return (
      <div className="app_body container">
        <Route path="/" exact={true} component={MainPage}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About}/>
      </div>
    )
  }

export default Body;