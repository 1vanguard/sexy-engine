import React from 'react'
import Message from './message'

const MessagesList = (props) => {
    let messages = props.messages.map(
        item => <Message 
            key={item.id}
            author={item.author}
            text={item.text}
        />
    )
    return (
        <div className="messages_list">
            {messages}
        </div>
    )
}

export default MessagesList