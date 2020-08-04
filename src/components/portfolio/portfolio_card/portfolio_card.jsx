import React from 'react'

const PortfolioCard = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">Проект №{props.id}</h5>
      <img src={props.imageSrc} className="card-img-top" alt="Hotel Russ" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <a href={props.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Перейти на сайт</a>
      </div>
    </div>
  )
}

export default PortfolioCard;