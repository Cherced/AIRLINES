import React from 'react'

// componente atomico para mostrar en el los destinos actuales en oferta

export const TripsOffer = () => {
  return (
      <section className="cards">
        <nav  className="cards__nav">
        <ul className="cards__nav--list">
            <img src="/images/moscow.jpg" alt="Moscow"/>
            <li className="cards__nav--info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
            </li>
            <li className="cards__nav--item">
                <p>
                Trip to Moscow
                </p>
                <h1>Price $600,86</h1>
            </li>
        </ul>
        <ul className="cards__nav--list">
            <img src="/images/puerto-rico.jpg" alt="PuertoRico"/>
            <li className="cards__nav--info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
            </li>
            <li className="cards__nav--item">
                <p>
                Trip to Puerto Rico
                </p>
                <h1>Price $600,86</h1>
            </li>
        </ul>
        <ul className="cards__nav--list">
            <img src="/images/honduras.jpg" alt="Honduras"/>
            <li className="cards__nav--info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
            </li>
            <li className="cards__nav--item">
                <p>
                Trip to Honduras
                </p>
                <h1>Price $600,86</h1>
            </li>
        </ul>
    </nav>
      </section>
  )
}
