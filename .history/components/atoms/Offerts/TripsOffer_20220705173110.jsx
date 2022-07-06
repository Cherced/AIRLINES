import React from 'react'

export const TripsOffer = () => {
  return (
      <section>
        <nav className="promotional-Cards--Container">
        <ul className="promotionalCard">
            <img src="/images/moscow.jpg" alt="Moscow"/>
            <li className="promotionalCard--Info">
                <p>
                Trip to Moscow
                </p>
                <h1>Price $600,86</h1>
            </li>
        </ul>
        <ul className="promotionalCard">
            <img src="/images/puerto-rico.jpg" alt="PuertoRico"/>
            <li className="promotionalCard--Info">
                <p>
                Trip to Puerto Rico
                </p>
                <h1>Price $600,86</h1>
            </li>
        </ul>
        <ul className="promotionalCard">
            <img src="/images/honduras.jpg" alt="Honduras"/>
            <li className="promotionalCard--Info">
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
