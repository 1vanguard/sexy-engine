import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './fontawesome';
import App from './App'
import {addMessage} from './redux/state'

export let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addMessage={addMessage} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    )
}