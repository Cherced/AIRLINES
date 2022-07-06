import React from 'react'
import { Header } from '../atoms/BannerStaff/Header'
import { Promotion } from '../atoms/BannerStaff/Promotion'

export const Banner = () => {
  return (
    <header className="main-Banner--Container">
        <Header/>
        <Promotion/>
    </header>
  )
}
