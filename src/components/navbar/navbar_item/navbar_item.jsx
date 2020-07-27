import React from 'react'
import ItemStyles from './navbar_item.module.css'

const NavbarItem = () => {
  return (
    <li className={ItemStyles}>
      <a className="nav-link" href="#">Главная<span className="sr-only">(current)</span></a>
    </li>
  )
}

export default NavbarItem;