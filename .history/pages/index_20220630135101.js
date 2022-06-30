import React from 'react'
import { Banner } from '../components/molecules/Banner'
import { Offers } from '../components/molecules/Offers'
import {Footer} from '../components/molecules/Footer'

const index = () => {
  return (
    <React.Fragment>
        <Banner/>
        <Offers/>
    </React.Fragment>
  )
}

export default index