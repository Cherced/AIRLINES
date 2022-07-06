import React from 'react'

// componente atomico para mostrar en el los destinos actuales en oferta

export const TripsOffer = () => {
    const [gateInfo, setGateInfo] = React.useState(false) // estado para hacer el toggle
    const [gateInfoOne, setGateInfoOne] = React.useState(false) // estado para hacer el toggle
    const [gateInfoTwo, setGateInfoTwo] = React.useState(false) // estado para hacer el toggle
 
    //ocupe hacer uno para cada uno, ya que no estamos consumiendo una api de viajes, por tanto no podia usar el mismo estado para las 3

  return (
      <section className="cards">
        <nav  className="cards__nav">
        <ul className="cards__nav--list">
            <img className="cards__list--image" src="/images/moscow.jpg" alt="Moscow"/>
            <li className={ gateInfo ? ("cards__nav--info onInfo"):("cards__nav--info offInfo")}>
                <p className="cards__info--parragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
            </li>
            <li className="cards__nav--item">
            <button onClick={() => setGateInfo(!gateInfo)} className="cards__nav--button">
                 <p className="cards__item--parragraph">
                Trip to Moscow
                </p>
                <h1>Price $600,86</h1>
            </button>   
            </li>
        </ul>
        <ul className="cards__nav--list">
            <img className="cards__list--image" src="/images/puerto-rico.jpg" alt="PuertoRico"/>
            <li className={ gateInfoOne ? ("cards__nav--info onInfo"):("cards__nav--info offInfo")}>
                <p className="cards__info--parragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
            </li>
            <li className="cards__nav--item">
                <button onClick={() => setGateInfoOne(!gateInfoOne)} className="cards__nav--button">
                <p className="cards__item--parragraph">
                Trip to Puerto Rico
                </p>
                <h1>Price $600,86</h1>
                </button>
            </li>
        </ul>
        <ul className="cards__nav--list">
            <img className="cards__list--image" src="/images/honduras.jpg" alt="Honduras"/>
            <li className={ gateInfoTwo ? ("cards__nav--info onInfo"):("cards__nav--info offInfo")}>
                <p className="cards__info--parragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
            </li>
            <li className="cards__nav--item">
                <button onClick={() => setGateInfoTwo(!gateInfoTwo)} className="cards__nav--button">
                <p className="cards__item--parragraph">
                Trip to Honduras
                </p>
                <h1>Price $600,86</h1>
                </button>                
            </li>
        </ul>
    </nav>
      </section>
  )
}
