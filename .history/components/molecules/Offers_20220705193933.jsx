import React from 'react'
import {TripsOffer} from '../atoms/Offerts/TripsOffer'
import { Menu } from '../atoms/Offerts/Menu'

export const Offers = () => {
  return (
    <main className="offers__container">
    <div className="offers__textContainer" aria-label='Offers'>
        <h1>Offers</h1> <hr />
    </div>
    <section className="offers-BoxModel--Container">
        <div className="offers-BoxModel-Content">
        <TripsOffer/>
        <hr />
        <h2>Chosen destination</h2>
        </div> 
        <Menu/>      
    </section> 
    </main>
  )
}
