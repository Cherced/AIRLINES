import React from 'react'

// esste es un componente de tipo atomo, que consta del titulo y el elemento de navegacion de la pagina 

export const Header = () => {
  return (
    <header className="header">
        <h1 className="header--title">AIRLINE</h1>
        <nav className="header__nav"> 
            <ul className="header__nav--list">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Destinations</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
