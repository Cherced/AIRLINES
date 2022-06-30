import React from 'react'
import { Banner } from '../components/molecules/Banner'
import { Offers } from '../components/molecules/Offers'
import {Footer} from '../components/molecules/Footer'

const Home = () => {
  return (
    <React.Fragment>
      <div className="idiomsShower">
        <button>
          en
        </button>
        <img src="images/arrow-down.svg" alt="arrow"/>
      </div>
        <Banner/>
        <Offers/>
        <Footer/>
    </React.Fragment>
  )
}

export default Home