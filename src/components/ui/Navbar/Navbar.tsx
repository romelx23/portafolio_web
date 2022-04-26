import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SelectColor } from '../SelectColor/SelectColor'
import { ToggleButton } from '../ToggleButton/ToggleButton'
import './Navbar.scss'

export const Navbar = () => {
    return (
        <ul className='container__nav'>
            <li>
                <Link to='/'>
                <h2>Romelx23</h2>
                </Link>
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
            <li className='link select' style={{zIndex:30}}>
                <SelectColor/>
            </li>
            {/* <li>
                <ToggleButton/>
            </li> */}
        </ul>
    )
}
