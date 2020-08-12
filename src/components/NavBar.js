import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className='navbar-brand'>
            Github Serch
        </div>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <NavLink exact to='/' className="nav-link">Main</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/about' className="nav-link">info</NavLink>
            </li>
        </ul>
    </nav>

)