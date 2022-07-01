import React from 'react'
import { Banner } from '../components/molecules/Banner'
import { Offers } from '../components/molecules/Offers'
import {Footer} from '../components/molecules/Footer'
import { ModalPortal} from '../components/atoms/BannerStaff/Modal/ModalPortal'
import { SelectIdioms } from '../components/atoms/BannerStaff/Modal/SelectIdioms'

const Home = () => {
  const [modal, setModal] = React.useState(false)

  return (
    
    <React.Fragment>
      <ModalPortal>
      {
        modal ? (<SelectIdioms/>) : (null)
      }
      </ModalPortal>
      <div className={modal ? ("idiomsShower turn") : ( "idiomsShower trass" )}>
        <button className="arrowButton--Modal"  onClick={()=> setModal(!modal)}>
          en
        </button>
        <img className="arrowImg--Modal"  src="images/arrow-down.png" alt="arrow"/>
        <button className="menu-Btn">
          <img src="images/Navbar.svg" alt="menu"/>
        </button>
      </div>
        <Banner/>
        <Offers/>
        <Footer/>
    </React.Fragment>
  )
}

export default Home