import React from 'react'
import { Header } from '../atoms/BannerStaff/Header'
import { Promotion } from '../atoms/BannerStaff/Promotion'

// componente de tipo molecula en el que se implementan dos atomos para conformar el banner de la pagina

export const Banner = () => {
  return (
    <section>
      <img src="/images/plane.png" alt="AIRLINES" />
      <div className="banner">
        <Header/>
        <Promotion/>
      </div>  
    </section>
  )
}
