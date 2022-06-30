import React from 'react'
import {TripsOffer} from '../atoms/Offerts/TripsOffer'
import { Menu } from '../atoms/Offerts/Menu'

export const Offers = () => {
  return (
    <section className="offers-Section--Container">
    <div className="offers-Title--Container">
        <h1>Offers</h1> <hr />
    </div>
    <div className="offers-BoxModel--Container">
        <div className="offers-BoxModel-Content">
        <TripsOffer/>
        <br />
        <h3>Chosen destination</h3>
        </div> 
        <Menu/>      
    </div>
    </section>
  )
}
