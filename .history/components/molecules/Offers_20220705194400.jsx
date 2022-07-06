import React from 'react'
import {TripsOffer} from '../atoms/Offerts/TripsOffer'
import { Menu } from '../atoms/Offerts/Menu'

export const Offers = () => {
  return (
    <main className="offers__container">
    <div className="offers__textContainer" aria-label='Offers'>
        <h1 className="offers__textContainer--text" >Offers</h1> <hr className="offers__textContainer--titleLine" />
    </div>
    <section className="offers__section">
        <div className="offers__section--container" aria-label="container">
        <TripsOffer/>
        <hr />
        <h2>Chosen destination</h2>
        </div> 
        <Menu/>      
    </section> 
    </main>
  )
}
