import React from 'react'

// componete de tipo atomo que se montara en el MODAL PORTAL
// su funcion es darle cuerpo a el menu de idiomas


export const SelectIdioms = () => {
  return (
    <nav className="Modal__Idioms" aria-label="Modal Container">
        <ul className="Modal__List">
            <li tabIndex="1" className="Modal__List--item">RU - Russian</li>
            <li tabIndex="1" className="Modal__List--item">DE - German </li>
            <li tabIndex="1" className="Modal__List--item">FR - French</li>
        </ul>
    </nav>
  )
}
