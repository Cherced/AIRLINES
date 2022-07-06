import React from 'react'
import { Banner } from '../components/molecules/Banner'
import { Offers } from '../components/molecules/Offers'
import {Footer} from '../components/molecules/Footer'
import { ModalPortal} from '../components/atoms/BannerStaff/Modal/ModalPortal'
import { SelectIdioms } from '../components/atoms/BannerStaff/Modal/SelectIdioms'
import { FloatMenu } from '../components/atoms/BannerStaff/FloatMenu'
import { useMenuFloatContext } from '../components/atoms/BannerStaff/FloatMenuContext'

// pagina principal donde se ecuentran todos los organismos de la pagina
// este tiene un interruptor para manejo de comportamiento de menu mobile, y otro para el modal de idiomas

const Home = () => {
  const [modal, setModal] = React.useState(false)
  const {menu, setMenu} = useMenuFloatContext();
  return (
    
    <React.Fragment>
      <FloatMenu/>
      <ModalPortal>
      {
        modal ? (<SelectIdioms/>) : (null)
      }
      </ModalPortal>
      <div className={modal ? ("idioms--menu onn") : ( "idioms--menu offf" )} aria-label="menu container" >
        <button className="arrowButton--Modal"  onClick={()=> setModal(!modal)}>
          en
          <img className="arrowImg--Modal"  src="images/arrow-down.png" alt="arrow"/>
        </button>      
        <button className="menu-Btn" onClick={()=> setMenu(true)}>
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