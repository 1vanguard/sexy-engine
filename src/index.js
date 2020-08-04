import * as serviceWorker from './serviceWorker'
import state, {subscriber}from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './fontawesome';
import App from './App'
import {addMessage, updateMessageText} from './redux/state'

let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    addMessage={addMessage}
                    updateMessageText={updateMessageText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerender(state)

subscriber(rerender)

serviceWorker.unregister();