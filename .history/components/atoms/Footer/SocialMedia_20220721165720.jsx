import React from 'react'
import Link from 'next/link'

// componente atomio para la renderizacion de redesociales desde un elemento de lista 

export const SocialMedia = () => {
  return (
    <nav className="socialMedia">
        <h1 className="socialMedia--title">Follow us</h1>
        <ul className="socialMedia__list">
          <li className="socialMedia--item">
          <Link href="#">
          <a className="socialMedia__item--ancord">
          <img className="socialMedia__imagen" src="/images/facebook.png" alt="facebook" />
          </a>
          </Link>
          </li>
          <li className="socialMedia--item">
          <Link href="#">
          <a className="socialMedia__item--ancord">
          <img className="socialMedia__imagen" src="/images/instagram.png" alt="instagram" />
          </a>
          </Link>
          </li>
          <li className="socialMedia--item">
          <Link href="#"> 
          <a className="socialMedia__item--ancord">
          <img className="socialMedia__imagen" src="/images/twitter.png" alt="tweiter" />
          </a>
          </Link>
          </li>          
        </ul>
    </nav>
  )
}
