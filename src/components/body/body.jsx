import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from '../main_page/main_page'
import About from '../about/about'
import Portfolio from '../portfolio/portfolio'
import Technologies from '../technologies/technologies'
import Contacts from '../contacts/contacts'

const Body = (props) => {
  return (
    <div className="app_body container py-5">
      <Switch>
        <Route exact path={`/${props.state[0].alias}`}>
          <MainPage header={props.state[0].header} mainPage={props.state[0].data} />
        </Route>
        <Route path={`/${props.state[1].alias}`}>
          <Portfolio header={props.state[1].header} portfolio={props.state[1].data} />
        </Route>
        <Route path={`/${props.state[2].alias}`}>
          <Technologies header={props.state[2].header} technologies={props.state[2].data} />
        </Route>
        <Route path={`/${props.state[3].alias}`}>
          <About header={props.state[3].header} about={props.state[3].data} />
        </Route>
        <Route path={`/${props.state[4].alias}`}>
          <Contacts header={props.state[4].header} сontacts={props.state[4].data} />
        </Route>
      </Switch>
    </div>
  )
}

export default Body;