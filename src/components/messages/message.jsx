import React from 'react'

const Message = (props) => {
    return (
        <div className="bg-light message mb-3 p-3">
            <div className="d-flex justify-content-between">
                <div className="message_author small text-muted">{props.author}</div>
                <div className="message_date">31.07.2020</div>
            </div>
            <div className="message_text">{props.text}</div>
        </div>
    )
}

export default Message