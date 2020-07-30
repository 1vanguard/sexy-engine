import React from 'react'
import Navbar from '../navbar/navbar'

const Header = (props) => {
  return (
    <header className="app_header">
      <Navbar state={props.state} />
    </header>
  )
}

export default Header;