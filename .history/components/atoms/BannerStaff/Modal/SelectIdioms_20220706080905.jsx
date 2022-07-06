import React from 'react'

// componete de tipo atomo que se montara en el MODAL PORTAL
// su funcion es darle cuerpo a el menu de idiomas


export const SelectIdioms = () => {
  return (
    <div className="Modal__Idioms" aria-label="Modal Container">
        <ul className="Modal__List">
            <li className="Modal__List--item">RU - Russian</li>
            <li className="Modal__List--item">DE - German </li>
            <li className="Modal__List--item">FR - French</li>
        </ul>
    </div>
  )
}
