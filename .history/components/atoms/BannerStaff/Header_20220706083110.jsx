import React from 'react'
import Link from 'next/link'

// esste es un componente de tipo atomo, que consta del titulo y el elemento de navegacion de la pagina 

export const Header = () => {
  return (
    <header className="header">
        <h1 className="header--title">AIRLINE</h1>
        <nav className="header__nav"> 
            <ul className="header__nav--list">
                <li className="header__list--item">
                <Link href="https://www.newshore.es/"> 
                  <a className="header__item--ancord">Home</a>
                </Link>
                  </li>
                <li className="header__list--item">
                <Link href="https://www.newshore.es/"> 
                  <a className="header__item--ancord">About</a>
                </Link>
                  </li>
                <li className="header__list--item">
                <Link href="https://www.newshore.es/"> 
                  <a className="header__item--ancord">Destinations</a>
                </Link>
                  </li>
                <li className="header__list--item">
                <Link href="https://www.newshore.es/"> 
                  <a className="header__item--ancord">Contact</a>
                </Link>
                  </li>
            </ul>
        </nav>
    </header>
  )
}
