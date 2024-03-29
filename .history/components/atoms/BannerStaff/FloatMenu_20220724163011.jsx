import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMenuFloatContext} from './FloatMenuContext'     


// componente de tipo atomo para el montaje de un menu que consta de las mismas 4 opciones de el nav original del hedeader, este esta abstraido de posicion y oculto sobre la pagina principal
// mediante un cambio de estado se desplaza de arriba hacia abajo
// se utiliza un patron de contexto o HOOK useContext, para comunicar la fuente de verdad... en este caso el estado del menu de idiomas


export const FloatMenu = () => {
    const {menu, setMenu} = useMenuFloatContext();
  return (
    <menu className={ menu? ("floatMenu--Container on"):("floatMenu--Container off")}>
        <nav className="floatMenu__nav"> 
        <button className="floatMenu--btn" onClick={() => setMenu(false)}>
            <div className="floatMenu--image">
            <Image  src={"/images/arrow-down.png"} height={30} width={30}/>
            </div>
        </button>
            <ul className="floatMenu__list">
                <li className="floatMenu__list--item">
                <Link href="#"> 
                    <a className="floatMenu__item--ancord">Home</a>
                </Link>
                    </li>
                <li className="floatMenu__list--item">
                <Link href="#">     
                    <a className="floatMenu__item--ancord">About</a>
                </Link>
                    </li>
                <li className="floatMenu__list--item">
                <Link href="#"> 
                    <a className="floatMenu__item--ancord">Destinations</a>
                </Link>
                    </li>
                <li className="floatMenu__list--item">
                <Link href="#"> 
                    <a className="floatMenu__item--ancord">Contact</a>
                </Link>
                </li>
            </ul>
        </nav>
    </menu>
  )
}
