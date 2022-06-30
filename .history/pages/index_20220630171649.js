import React from 'react'
import { Banner } from '../components/molecules/Banner'
import { Offers } from '../components/molecules/Offers'
import {Footer} from '../components/molecules/Footer'
import { ModalPortal} from '../components/atoms/BannerStaff/Modal/ModalPortal'

const Home = () => {

  const [modal, setModal] = React.useState(false)

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