import React from 'react'

// componente atomico para renderizar un menu de interaccion con opciones, y logica relevante de la WebApp

export const Menu = () => {
  return (
    <aside className="menu">
        <h1>Menu</h1>
        <nav className="menuAside-Navbar--Container" id="EXPECIFFFYYY">
        <ul className="list-Items--Container">
            <li><a>Check-in</a></li>
            <li><a>Manage My Booking</a></li>
            <li><a>Search</a></li>
            <li><a>Destinations</a></li>
            <li><a>Members</a></li>
        </ul>
        </nav>       
    </aside>
  )
}
