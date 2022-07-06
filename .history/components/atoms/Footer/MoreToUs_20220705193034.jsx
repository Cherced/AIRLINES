import React from 'react'

// es un componente de tipo atomico, para la renderizacion de la informacion relevante de la webapp
// su dinamica es de titulo por actividad y informacion relevante dentro de lista 

export const MoreToUs = () => {
  return (
    <section className="footer">
        <nav className="footer__nav">
            <h1>About Us</h1>
            <a><p>we want to help passengers to reach their destinations</p></a>
        </nav>
        <nav className="footer__nav">
            <h1>Explore</h1>
            <ul className="footer__nav--list">
                <li className="footer__nav--item"><a>Home</a></li>
                <li className="footer__nav--item"><a>Destinations</a></li>
                <li className="footer__nav--item"><a>About</a></li>
            </ul>
        </nav>
        <nav className="footer__nav">
            <h1>Information</h1>
            <ul className="footer__nav--list">
            <li className="footer__nav--item"><a>More search</a></li>
            <li className="footer__nav--item"><a>Blog</a></li>
            <li className="footer__nav--item"><a>Manage My Bookings</a></li>
            </ul>
        </nav>
        <nav className="footer__nav">
            <h1>Services</h1>
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
