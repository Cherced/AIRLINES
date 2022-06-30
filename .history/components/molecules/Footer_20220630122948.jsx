import React from 'react'
import { SocialMedia } from '../atoms/Footer/SocialMedia'
import { MoreToUs } from '../atoms/Footer/MoreToUs'

export const Footer = () => {
  return (
    <footer className="Footer--Container">
        <SocialMedia/>
        <MoreToUs/>
    </footer>
  )
}
