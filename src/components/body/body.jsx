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
        <Route exact path={`/${props.state.pages[0].alias}`}>
          <PageHeader header={props.state.pages[0].header} />
          <MainPage mainPage={props.state.pages[0].data} />
        </Route>
        <Route path={`/${props.state.pages[1].alias}`}>
          <PageHeader header={props.state.pages[1].header} />
          <Portfolio portfolio={props.state.pages[1].portfolio} />
        </Route>
        <Route path={`/${props.state.pages[2].alias}`}>
          <PageHeader header={props.state.pages[2].header} />
          <Technologies technologies={props.state.pages[2].technologies} />
        </Route>
        <Route path={`/${props.state.pages[3].alias}`}>
          <PageHeader header={props.state.pages[3].header} />
          <About about={props.state.pages[3].data} />
        </Route>
        <Route path={`/${props.state.pages[4].alias}`}>
          <PageHeader header={props.state.pages[4].header} />
          <Contacts
            messages={props.state.messages}
            langConsts={props.state.languageConstants}
            authorNameText={props.state.authorNameText}
            newMessageText={props.state.newMessageText}
            dispatch={props.dispatch}
            />
            {/* 
            addMessage={props.addMessage}
            updateMessageText={props.updateMessageText} */}
        </Route>
      </Switch>
    </div>
  )
}

export default Body