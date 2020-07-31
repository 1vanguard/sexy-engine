import React from 'react'
import MessagesList from '../messages/message_list'

const Contacts = (props) => {
  let messageAuthor = React.createRef()
  let messageBody = React.createRef()
  let sendMessage = () => {
    let author = messageAuthor.current.value
    let text = messageBody.current.value
    props.addMessage(author, text)
  }
  return (
    <div className="contacts">
      <p>{props.contacts}</p>
      <form className="justify-content-center mb-5 no-gutters row">
        <div className="col-lg-8 col-xl-6">
          <div className="form-group">
            <label htmlFor="username">Ваше имя</label>
            <input type="text" className="form-control" id="username" ref={messageAuthor} />
          </div>
          <div className="form-group">
            <label htmlFor="usertext">Сообщение</label>
            <textarea className="form-control" id="usertext" ref={messageBody} rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={sendMessage}>Отправить</button>
        </div>
      </form>
      <MessagesList addMessage={props} />
    </div>
  )
}

export default Contacts;