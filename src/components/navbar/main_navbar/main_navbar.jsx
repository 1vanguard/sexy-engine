import React from 'react'
import MainNavbarItem from '../navbar_item/main_navbar_item'

const MainNavbar = (props) => {
  let menuItems = props.mainMenu.map ( item => <MainNavbarItem href={"/" + item.alias} text={item.text} sr={item.sr_text} key={item.id} /> );
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      {menuItems}
    </ul>
  )
}

export default MainNavbar;