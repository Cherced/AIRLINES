import React from 'react'

// componete de tipo atomo que se montara en el MODAL PORTAL
// su funcion es darle cuerpo a el menu de idiomas


export const SelectIdioms = () => {
  return (
    <div className="ModalContainer" aria-label="Modal Container">
        <ul className="select-Idiom--Modal">
            <li>RU - Russian</li>
            <li>DE - German </li>
            <li>FR - French</li>
        </ul>
    </div>
  )
}
