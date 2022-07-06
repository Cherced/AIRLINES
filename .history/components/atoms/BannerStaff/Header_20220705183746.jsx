import React from 'react'

// esste es un componente de tipo atomo, que consta del titulo y el elemento de navegacion de la pagina 

export const Header = () => {
  return (
    <header className="header--Container">
        <h1>AIRLINE</h1>
        <nav className="navBar--Container"> 
            <ul className="itmes-Navbar--Container">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Destinations</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
