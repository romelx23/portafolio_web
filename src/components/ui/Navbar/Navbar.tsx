import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ToggleButton } from '../ToggleButton/ToggleButton'
import './Navbar.scss'

export const Navbar = () => {
    return (
        <ul className='container__nav'>
            <li>
                <h2>Romelx23</h2>
            </li>
            <li style={{flex:1}}>
            </li>
            <li className='link'>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className='link'>
                <NavLink to='/about'>Sobre Mi</NavLink>
            </li>
            <li className='link'>
                <NavLink to='/contact'>Contacto</NavLink>
            </li>
            {/* <li>
                <ToggleButton/>
            </li> */}
        </ul>
    )
}
