const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const messageReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:            
            let newMessage = {
                id: 2,
                author: state.authorNameText,
                text: state.newMessageText
            }
            state.messages.push(newMessage)
            state.authorNameText = ''
            state.newMessageText = ''
            return state
        case UPDATE_MESSAGE_TEXT:
            state.authorNameText = action.author
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (author, text) => ({type: UPDATE_MESSAGE_TEXT, author: author, text: text})

export default messageReducer