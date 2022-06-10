import React from 'react'
import style from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <div className={style.logo}>ORNFLIX</div>
    </nav>
  )
}

export default NavBar
