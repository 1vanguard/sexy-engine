import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from '../main_page/main_page'
import About from '../about/about'
import Portfolio from '../portfolio/portfolio'
import Technologies from '../technologies/technologies'

const Body = (props) => {
  return (
    <div className="app_body container">
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/technologies">
          <Technologies technologies={props.technologies} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default Body;