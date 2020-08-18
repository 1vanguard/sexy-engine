import React from 'react'
import {addMessageActionCreator, updateAuthorActionCreator, updateMessageActionCreator} from '../../redux/messageReducer'
import MessagesList from '../messages/message_list'

const Contacts = (props) => {
  let sendMessage = () => {
    props.dispatch(addMessageActionCreator())
  }
  let changeAuthor = (e) => {
    let target = e.target;
    let author = target.name === 'username' && target.value
    props.dispatch(updateAuthorActionCreator(author))
  }
  let changeMessage = (e) => {
    let target = e.target;
    let text = target.name === 'usertext' && target.value
    props.dispatch(updateMessageActionCreator(text))
  }
  return (
    <div className="contacts">
      <p>{props.contacts}</p>
      <form className="justify-content-center mb-5 no-gutters row">
        <div className="col-lg-8 col-xl-6">
          <div className="form-group">
            <label htmlFor="username">{props.langConsts[0].yourNameText}</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={changeAuthor}
              value={props.authorNameText}
            />
          </div>
          <div className="form-group">
            <label htmlFor="usertext">{props.langConsts[1].yourMessageText}</label>
            <textarea
              className="form-control"
              id="usertext"
              rows="3"
              name="usertext"
              onChange={changeMessage}
              value={props.newMessageText} />
          </div>
          <button type="button" className="btn btn-primary" onClick={sendMessage}>Отправить</button>
        </div>
      </form>
      <MessagesList messages={props.messages} />
    </div>
  )
}

export default Contacts