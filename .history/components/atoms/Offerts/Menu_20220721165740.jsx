import React from 'react'
import Link from 'next/link'

// componente atomico para renderizar un menu de interaccion con opciones, y logica relevante de la WebApp

export const Menu = () => {
  return (
    <aside className="menu">
        <h1 className="menu--title">Menu</h1>
        <nav className="menu__nav" id="menu__nav">
        <ul className="menu__nav--list">
            <li className="menu__nav--item">
            <Link href="#"> 
              <a className="menu__item--ancords">Check-in</a>
            </Link>
              </li>
            <li className="menu__nav--item">
            <Link href="#"> 
              <a className="menu__item--ancords">Manage My Booking</a>
            </Link>
              </li>
            <li className="menu__nav--item">
            <Link href="#"> 
              <a className="menu__item--ancords">Search</a>
            </Link>
              </li>
            <li className="menu__nav--item">
            <Link href="#"> 
              <a className="menu__item--ancords">Destinations</a>
              </Link>
              </li>
            <li className="menu__nav--item">
            <Link href="#"> 
              <a className="menu__item--ancords">Members</a>
            </Link>
              </li>
        </ul>
        </nav>       
    </aside>
  )
}
