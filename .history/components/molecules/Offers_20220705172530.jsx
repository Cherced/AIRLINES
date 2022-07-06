import React from 'react'
import {TripsOffer} from '../atoms/Offerts/TripsOffer'
import { Menu } from '../atoms/Offerts/Menu'

export const Offers = () => {
  return (
    <main className="offers-Section--Container">
    <div className="offers-Title--Container">
        <h1>Offers</h1> <hr />
    </div>
    <section className="offers-BoxModel--Container">
        <div className="offers-BoxModel-Content">
        <TripsOffer/>
        <hr />
        <h3>Chosen destination</h3>
        </div> 
        <Menu/>      
    </section> 
    </main>
  )
}
