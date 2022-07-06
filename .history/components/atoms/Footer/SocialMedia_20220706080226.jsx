import React from 'react'
import Link from 'next/link'

// componente atomio para la renderizacion de redesociales desde un elemento de lista 

export const SocialMedia = () => {
  return (
    <nav className="socialMedia">
        <h1>Follow us</h1>
        <ul className="socialMedia__list">
          <li>
          <Link href="https://www.newshore.es/">
          <a>
          <img src="/images/facebook.png" alt="facebook" />
          </a>
          </Link>
          </li>
          <li>
          <Link href="https://www.newshore.es/">
          <a>
          <img src="/images/instagram.png" alt="instagram" />
          </a>
          </Link>
          </li>
          <li>
          <Link href="https://www.newshore.es/"> 
          <a>
          <img src="/images/twitter.png" alt="tweiter" />
          </a>
          </Link>
          </li>          
        </ul>
    </nav>
  )
}
