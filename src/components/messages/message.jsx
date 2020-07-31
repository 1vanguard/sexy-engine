import React from 'react'

const Message = (props) => {
    return (
        <div className="message">
            <div className="d-flex justify-content-between">
                <div className="message_author">Author</div>
                <div className="message_date">31.07.2020</div>
            </div>
            <div className="message_text">Lorem ipsum...</div>
        </div>
    )
}

export default Message