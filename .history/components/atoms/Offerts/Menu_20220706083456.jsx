import React from 'react'
import Link from 'next/link'

// componente atomico para renderizar un menu de interaccion con opciones, y logica relevante de la WebApp

export const Menu = () => {
  return (
    <aside className="menu">
        <h1>Menu</h1>
        <nav className="menu__nav" id="menu__nav">
        <ul className="menu__nav--list">
            <li className="menu__nav--item">
            <Link href="https://www.newshore.es/"> 
              <a>Check-in</a>
            </Link>
              </li>
            <li className="menu__nav--item">
            <Link href="https://www.newshore.es/"> 
              <a>Manage My Booking</a>
            </Link>
              </li>
            <li className="menu__nav--item">
            <Link href="https://www.newshore.es/"> 
              <a>Search</a>
            </Link>
              </li>
            <li className="menu__nav--item">
            <Link href="https://www.newshore.es/"> 
              <a>Destinations</a>
              </Link>
              </li>
            <li className="menu__nav--item">
            <Link href="https://www.newshore.es/"> 
              <a>Members</a>
            </Link>
              </li>
        </ul>
        </nav>       
    </aside>
  )
}
