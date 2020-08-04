import React from 'react'
import PortfolioCard from './portfolio_card/portfolio_card'

const Portfolio = (props) => {
  let portfolioList = props.portfolio.map(
    item => <div className="col-md-4" key={item.id}><PortfolioCard
      id={item.id}
      title={item.title}
      desc={item.desc}
      link={item.link}
      imageSrc={item.imageSrc}
    /></div> )
  return (
    <div className="portfolio">
      <div className="row">
        {portfolioList}
      </div>
    </div>
  )
}

export default Portfolio