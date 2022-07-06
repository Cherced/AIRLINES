import React from 'react'

// esste es un componente de tipo atomo, que consta del titulo y el elemento de navegacion de la pagina 

export const Header = () => {
  return (
    <header className="header">
        <h1 className="header--title">AIRLINE</h1>
        <nav className="header__nav"> 
            <ul className="header__nav--list">
                <li className="header__list--item"><a>Home</a></li>
                <li className="header__list--item"><a>About</a></li>
                <li className="header__list--item"><a>Destinations</a></li>
                <li className="header__list--item"><a>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
