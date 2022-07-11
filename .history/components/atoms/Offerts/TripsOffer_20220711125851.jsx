import React from 'react'

// componente atomico para mostrar en el los destinos actuales en oferta

export const TripsOffer = () => {
    const [gateInfo, setGateInfo] = React.useState(false) // estado para hacer el toggle
    const [gateInfoOne, setGateInfoOne] = React.useState(false) // estado para hacer el toggle
    const [gateInfoTwo, setGateInfoTwo] = React.useState(false) // estado para hacer el toggle
 
    //ocupe hacer uno para cada uno, ya que no estamos consumiendo una api de viajes, por tanto no podia usar el mismo estado para las 3

  return (
      <section className="cards">
        <button onClick={() => setGateInfo(!gateInfo)} className="cards__nav--button">
        <nav  className="cards__nav moscow">
        <ul className="cards__nav--list">
            <li className={ gateInfo ? ("cards__nav--info onInfo"):("cards__nav--info offInfo")}>
                <a className="cards__info--parragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                </a>
            </li>
            <li className="cards__nav--item">
                <a className="cards__item--destiny">
                    Trip to Moscow
                </a>
            </li>
            <li className="cards__item--price">
                    <a>
                        Price $600,86
                    </a>
            </li>            
        </ul>
        </nav>
        </button>   
        <button onClick={() => setGateInfoOne(!gateInfoOne)} className="cards__nav--button">
        <nav  className="cards__nav puertoRico">
        <ul className="cards__nav--list">
            <li className={ gateInfoOne ? ("cards__nav--info onInfo"):("cards__nav--info offInfo")}>
                <a className="cards__info--parragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                </a>
            </li>
            <li className="cards__nav--item">
                <a className="cards__item--destiny">
                    Trip to Puerto Rico
                </a>
            </li>
            <li className="cards__item--price">
                    <a>
                        Price $600,86
                    </a>
            </li>            
        </ul>
        </nav>
        </button>
        <button onClick={() => setGateInfoTwo(!gateInfoTwo)} className="cards__nav--button">
        <nav  className="cards__nav honduras">        
        <ul className="cards__nav--list">
            <li className={ gateInfoTwo ? ("cards__nav--info onInfo"):("cards__nav--info offInfo")}>
                <a className="cards__info--parragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                </a>
            </li>
            <li className="cards__nav--item">
                <a className="cards__item--destiny">
                    Trip to Honduras
                </a>
            </li>
            <li className="cards__item--price">
                    <a>
                        Price $600,86
                    </a>
            </li>            
        </ul>
        </nav>
        </button>  
      </section>
  )
}
