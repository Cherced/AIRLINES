import React from 'react'
import Link from 'next/link'

// es un componente de tipo atomico, para la renderizacion de la informacion relevante de la webapp
// su dinamica es de titulo por actividad y informacion relevante dentro de lista 

export const MoreToUs = () => {
  return (
    <section className="footer">
        <nav className="footer__nav">
            <h1 className="footer__nav--title">About Us</h1>
            <Link href="https://www.newshore.es/">
            <a><p className="footer__nav--parragraph">we want to help passengers to reach their destinations</p></a>
            </Link>
        </nav>
        <nav className="footer__nav">
            <h1 className="footer__nav--title">Explore</h1>
            <ul className="footer__nav--list">
            <Link href="https://www.newshore.es/">
                <li className="footer__nav--item"><a>Home</a></li>
            </Link>
            <Link href="https://www.newshore.es/">
                <li className="footer__nav--item"><a>Destinations</a></li>
            </Link>
            <Link href="https://www.newshore.es/">
                <li className="footer__nav--item"><a>About</a></li>
            </Link>
            </ul>
        </nav>
        <nav className="footer__nav">
            <h1 className="footer__nav--title">Information</h1>
            <ul className="footer__nav--list">
            <li className="footer__nav--item"><a>More search</a></li>
            <li className="footer__nav--item"><a>Blog</a></li>
            <li className="footer__nav--item"><a>Manage My Bookings</a></li>
            </ul>
        </nav>
        <nav className="footer__nav">
            <h1 className="footer__nav--title">Services</h1>
            <ul className="footer__nav--list">
            <li className="footer__nav--item"><a>Manage My Bookings</a></li>
            <li className="footer__nav--item"><a>Checkin</a></li>
            <li className="footer__nav--item"><a>Hotel</a></li>
            <li className="footer__nav--item"><a>Cars</a></li>
            </ul>
        </nav>
    </section>
  )
}
