import * as serviceWorker from './serviceWorker'
import store from './redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './fontawesome';
import App from './App'

let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerender(store.getState())

store.subscribe( () => {
    let state = store.getState()
    rerender(state)
} )

serviceWorker.unregister();