const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const UPDATE_MESSAGE_AUTHOR = 'UPDATE-MESSAGE-AUTHOR'

let inintailState = {
    messages: [
        {id:1, author: "The author", text: "Text text text"}
    ],
    newMessageText: "Введите сообщение",
    authorNameText: "Введите Ваше имя"
}

const messageReducer = (state = inintailState, action) => {
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
            state.newMessageText = action.text
            return state
        case UPDATE_MESSAGE_AUTHOR:
            state.authorNameText = action.author
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})
export const updateAuthorActionCreator = (author) => ({type: UPDATE_MESSAGE_AUTHOR, author})

export default messageReducer