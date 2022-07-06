import React from 'react'
import { useMenuFloatContext} from './FloatMenuContext'


// componente de tipo atomo para el montaje de un menu que consta de las mismas 4 opciones de el nav original del hedeader, este esta abstraido de posicion y oculto sobre la pagina principal
// mediante un cambio de estado se desplaza de arriba hacia abajo
// se utiliza un patron de contexto o HOOK useContext, para comunicar la fuente de verdad... en este caso el estado del menu de idiomas


export const FloatMenu = () => {
    const {menu, setMenu} = useMenuFloatContext();
  return (
    <menu className={ menu? ("FloatMenu--Container on"):("FloatMenu--Container off")}>
        <nav className="navBarFloat--Container"> 
        <button className="backButton" onClick={() => setMenu(false)}>
            <img src="images/arrow-down.png" alt="arrowBack"/>
        </button>
            <ul className="itmes-NavbarFloat--Container">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Destinations</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    </menu>
  )
}
