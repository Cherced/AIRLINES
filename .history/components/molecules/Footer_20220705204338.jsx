import React from 'react'
import { SocialMedia } from '../atoms/Footer/SocialMedia'
import { MoreToUs } from '../atoms/Footer/MoreToUs'

//componente de tipo molecula que agrupa dos mas para conformar el footer de la aplicacion

export const Footer = () => {
  return (
    <footer className="Footer--Container">
        <SocialMedia/>
        <MoreToUs/>
    </footer>
  )
}
