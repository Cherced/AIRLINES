import React from 'react'

export const TripsOffer = () => {
  return (
    <div className="promotional-Cards--Container">
        <div className="promotionalCard">
            <img src="/images/moscow.jpg" alt="moscu"/>
            <div className="promotionalCard--Info">
                <p>
                Trip to Moscow
                </p>
                <h1>Price $600,86</h1>
            </div>
        </div>
        <div className="promotionalCard">
            <img src="/images/puerto-rico.jpg" alt="puerrtorro"/>
            <div className="promotionalCard--Info">
                <p>
                Trip to Puerto Rico
                </p>
                <h1>Price $600,86</h1>
            </div>
        </div>
        <div className="promotionalCard">
            <img src="/images/honduras.jpg" alt="honduras"/>
            <div className="promotionalCard--Info">
                <p>
                Trip to Honduras
                </p>
                <h1>Price $600,86</h1>
            </div>
        </div>
    </div>
  )
}
