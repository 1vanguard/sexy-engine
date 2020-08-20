import {createStore, combineReducers} from 'redux'
import languageConstantsReducer from './languageConstantsReducer'
import pagesReducer from './pagesReducer'
import messageReducer from './messageReducer'

let reducersBundle = combineReducers({
    languageConstants: languageConstantsReducer,
    pages: pagesReducer,
    messagesData: messageReducer
})

let store = createStore(reducersBundle);

export default store