const LANG_CONST = 'LANGUAGE-CONSTANT'

let initialaState = [
    {yourNameText: "Ваше имя"},
    {yourMessageText: "Ваше сообщение"}
]

const languageConstantsReducer = (state = initialaState, action) => {
    return state
}

export const languageConstantsActionCreator = () => ({type: LANG_CONST})

export default languageConstantsReducer