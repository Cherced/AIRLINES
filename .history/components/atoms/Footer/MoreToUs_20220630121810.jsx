import React from 'react'

export const MoreToUs = () => {
  return (
    <footer className="footerNavBar--Container">
        <nav className="navbar-Item-Content">
            <h1>About Us</h1>
            <p><a>we want to help passengers to reach their destinations</a></p>
        </nav>
        <nav className="navbar-Item-Content">
            <ul>
                <li><a>Home</a></li>
                <li><a>Destinations</a></li>
                <li><a>About</a></li>
            </ul>
        </nav>
        <nav className="navbar-Item-Content">
            <ul>
            <li><a>More search</a></li>
            <li><a>Blog</a></li>
            <li><a>Manage My Bookings</a></li>
            </ul>
        </nav>
        <nav className="navbar-Item-Content">
            <ul>
            <li><a>Manage My Bookings</a></li>
            <li><a>Checkin</a></li>
            <li><a>Hotel</a></li>
            <li><a>Cars</a></li>
            </ul>
        </nav>
    </footer>
  )
}
