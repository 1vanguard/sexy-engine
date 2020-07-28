import React from 'react'
import MainNavbarItem from '../navbar_item/main_navbar_item'

const MainNavbar = () => {
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <MainNavbarItem href="/" text="Главная" sr="Home page"/>
      <MainNavbarItem href="/portfolio" text="Портфолио" sr="Portfolio"/>
      <MainNavbarItem href="/about" text="Обо мне" sr="About"/>
    </ul>
  )
}

export default MainNavbar;