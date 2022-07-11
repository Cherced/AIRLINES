import React from 'react'
import Link from 'next/link'

// es un componente de tipo atomico, para la renderizacion de la informacion relevante de la webapp
// su dinamica es de titulo por actividad y informacion relevante dentro de lista 

export const MoreToUs = () => {
  return (
    <section className="footer">
        <nav className="footer__nav">
            <h1 className="footer__nav--title">About Us</h1>
            <li className="footer__nav--parragraph">
            <Link href="https://www.newshore.es/">
                <a>
                we want to help passengers to reach their destinations
                </a>
            </Link>
                </li>
        </nav>
        <nav className="footer__nav">
            <h1 className="footer__nav--title">Explore</h1>
            <ul className="footer__nav--list">
                <li className="footer__nav--item">
                    <Link href="https://www.newshore.es/"><a className="footer__nav--ancord">Home</a>
                    </Link>
                    </li>
                <li className="footer__nav--item">
                    <Link href="https://www.newshore.es/"><a className="footer__nav--ancord">Destinations</a>
                    </Link>
                    </li>
                <li className="footer__nav--item">
                    <Link href="https://www.newshore.es/"><a className="footer__nav--ancord">About</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <nav className="footer__nav">
            <h1 className="footer__nav--title">Information</h1>
            <ul className="footer__nav--list">
            <li className="footer__nav--item"><a className="footer__nav--ancord">More search</a></li>
            <li className="footer__nav--item"><a className="footer__nav--ancord">Blog</a></li>
            <li className="footer__nav--item"><a className="footer__nav--ancord">Manage My Bookings</a></li>
            </ul>
        </nav>
        <nav className="footer__nav">
            <h1 className="footer__nav--title">Services</h1>
            <ul className="footer__nav--list">
            <li className="footer__nav--item"><a className="footer__nav--ancord">Manage My Bookings</a></li>
            <li className="footer__nav--item"><a className="footer__nav--ancord">Checkin</a></li>
            <li className="footer__nav--item"><a className="footer__nav--ancord">Hotel</a></li>
            <li className="footer__nav--item"><a className="footer__nav--ancord">Cars</a></li>
            </ul>
        </nav>
    </section>
  )
}
