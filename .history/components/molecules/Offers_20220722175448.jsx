import React from 'react'
import {TripsOffer} from '../atoms/Offerts/TripsOffer'
import { Menu } from '../atoms/Offerts/Menu'

// componente de tipo molecula el cual agrupa la seccion principal de la pagina y en el se renderizan promos y demas

export const Offers = () => {
  return (
    <main className="offers__container" id="main">
    <div className="offers__textContainer" aria-label='Offers'>
        <h1 className="offers__textContainer--text" >Offers</h1> <hr className="offers__textContainer--titleLine" />
    </div>
    <section className="offers__section">
        <div className="offers__section--container" aria-label="container">
        <TripsOffer/>
        <hr className="offers__section--line"/>
        <h2 className="offers__section--title">Chosen destination</h2>
        </div> 
        <Menu/>      
    </section> 
    </main>
  )
}
