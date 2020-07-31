import React from 'react'
import MainNavbarItem from '../navbar_item/main_navbar_item'

const MainNavbar = (props) => {
  let menuItems = props.state.slice(1).map (
    item => <MainNavbarItem
      href={"/" + item.alias}
      text={item.menu_text}
      sr={item.sr_text}
      key={item.id}
      icon_type={item.icon_type}
      icon={item.icon}
    /> );
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      {menuItems}
    </ul>
  )
}

export default MainNavbar;