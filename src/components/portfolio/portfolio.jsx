import React from 'react'
/* import Bs4_row from '../bs4_row/bs4_row' */
import PortfolioCard from './portfolio_card/portfolio_card'

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      {/* <Bs4_row /> */}
      <h1 className="mb-5 text-center">{props.header}</h1>
      <div className="row">
        <div className="col-md-4">
          <PortfolioCard
            title="Hotel Russ"
            desc="РУСЬ – комфортабельная и недорогая гостиница в Петербурге!"
            link="https://hotelruss.spb.ru"
            imageSrc="https://hotelruss.spb.ru/images/logo.png"
            />
        </div>
        <div className="col-md-4">
          <PortfolioCard
            title="Accanto"
            desc="Accanto Invest Group - Мы строим будущее"
            link="https://accantoinvestgroup.com/"
            imageSrc="https://accantoinvestgroup.com/images/logo.png"
            />
        </div>
        <div className="col-md-4">
          <PortfolioCard
            title="Фарту-Масти"
            desc="Фарту-Масти - бесплатные прогнозы для братвы"
            link="https://fartumasti.ru"
            imageSrc="https://fartumasti.ru/images/fartumasti_cover_md.png"
            />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;