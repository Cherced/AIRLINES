import React from 'react'

// componente de tipo atomico, para mostrar promociones y interaccion de compra por medio de boton

export const Promotion = () => {
  return (
    <div className="promotions" aria-label="promotional card">
        <h1 className="promotions--title">Visit Canada with prices from $800</h1>
        <p className="promotions--parragraph">Prepare your bags and forget your worries</p>
        <p className="promotions--parragraph"> to start enjoying your holidays in this fantastic country</p>
        <button className="promotions--btn" type="button">BUY NOW</button>
    </div>   
  )
}
