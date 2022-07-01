import React from 'react'
import { useMenuFloatContext} from './FloatMenuContext'


export const FloatMenu = () => {
    const {menu, setMenu} = useMenuFloatContext();
  return (
    <nav className="FloatMenu--Container">
        
        <nav className="navBarFloat--Container"> 
        <button>
            Back
        </button>
            <ul className="itmes-NavbarFloat--Container">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Destinations</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    </nav>
  )
}
