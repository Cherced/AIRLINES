import React from 'react'

export const SocialMedia = () => {
  return (
    <nav className="SocialMedia--Container">
        <h1>Follow us</h1>
        <ul className="iconsSocialMedia--Container">
          <li><a>
          <img src="/images/facebook.png" alt="facebook" />
          </a></li>
          <li><a>
          <img src="/images/instagram.png" alt="instagram" />
          </a></li>
          <li><a>
          <img src="/images/twitter.png" alt="tweiter" />
          </a></li>          
        </ul>
    </nav>
  )
}
