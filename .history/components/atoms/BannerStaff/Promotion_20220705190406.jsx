import React from 'react'

// componente de tipo atomico, para mostrar promociones y interaccion de compra por medio de boton

export const Promotion = () => {
  return (
    <div className="promotions" aria-label="promotional card">
        <h1>Visit Canada with prices from $800</h1>
        <p>Prepare your bags and forget your worries</p>
        <p> to start enjoying your holidays in this fantastic country</p>
        <button className="promotions--btn" type="button">BUY NOW</button>
    </div>   
  )
}
