import React from 'react'

export const Menu = () => {
  return (
    <aside className="menuAside--Container">
        <h1>Menu</h1>
        <nav>
        <ul className="menuAside-Navbar--Container">
            <li><a>Check-in</a></li>
            <li><a>Manage My Booking</a></li>
            <li><a>Search</a></li>
            <li><a>Destinations</a></li>
            <li><a>Members</a></li>
        </ul>
        </nav>       
    </aside>
  )
}
