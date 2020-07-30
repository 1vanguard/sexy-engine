import React from 'react'
import BrandName from '../brand/brand_name'
import MainNavbar from './main_navbar/main_navbar'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <BrandName />
      </a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <MainNavbar state={props.state} />
      </div>
    </nav>
  )
}

export default Navbar;