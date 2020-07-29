import React from 'react'
import Navbar from '../navbar/navbar'

const Header = (props) => {
  return (
    <header className="app_header container">
      <Navbar mainMenu={props.mainMenu} />
    </header>
  )
}

export default Header;