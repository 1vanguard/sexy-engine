import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from '../main_page/main_page'
import PageHeader from '../page_header/page_header'
import About from '../about/about'
import Portfolio from '../portfolio/portfolio'
import Technologies from '../technologies/technologies'
import Contacts from '../contacts/contacts'

const Body = (props) => {
  return (
    <div className="app_body container py-5">
      <Switch>
        <Route exact path={`/${props.state[0].alias}`}>
          <PageHeader header={props.state[0].header} />
          <MainPage mainPage={props.state[0].data} />
        </Route>
        <Route path={`/${props.state[1].alias}`}>
          <PageHeader header={props.state[1].header} />
          <Portfolio portfolio={props.state[1].data} />
        </Route>
        <Route path={`/${props.state[2].alias}`}>
          <PageHeader header={props.state[2].header} />
          <Technologies technologies={props.state[2].data} />
        </Route>
        <Route path={`/${props.state[3].alias}`}>
          <PageHeader header={props.state[3].header} />
          <About about={props.state[3].data} />
        </Route>
        <Route path={`/${props.state[4].alias}`}>
          <PageHeader header={props.state[4].header} />
          <Contacts сontacts={props.state[4].data} addMessage={props.addMessage} />
        </Route>
      </Switch>
    </div>
  )
}

export default Body