import React from 'react'

// componente atomico para renderizar un menu de interaccion con opciones, y logica relevante de la WebApp

export const Menu = () => {
  return (
    <aside className="menu">
        <h1>Menu</h1>
        <nav className="menu__nav" id="menu__nav">
        <ul className="menu__nav--list">
            <li className="menu__nav--item"><a>Check-in</a></li>
            <li className="menu__nav--item"><a>Manage My Booking</a></li>
            <li className="menu__nav--item"><a>Search</a></li>
            <li className="menu__nav--item"><a>Destinations</a></li>
            <li className="menu__nav--item"><a>Members</a></li>
        </ul>
        </nav>       
    </aside>
  )
}
