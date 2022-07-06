import React from 'react'

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
                <li><a>Home</a></li>
                <li><a>Destinations</a></li>
                <li><a>About</a></li>
            </ul>
        </nav>
        <nav className="footer__nav">
            <h1>Information</h1>
            <ul className="footer__nav--list">
            <li><a>More search</a></li>
            <li><a>Blog</a></li>
            <li><a>Manage My Bookings</a></li>
            </ul>
        </nav>
        <nav className="footer__nav">
            <h1>Services</h1>
            <ul className="footer__nav--list">
            <li><a>Manage My Bookings</a></li>
            <li><a>Checkin</a></li>
            <li><a>Hotel</a></li>
            <li><a>Cars</a></li>
            </ul>
        </nav>
    </section>
  )
}
