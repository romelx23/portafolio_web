import { Link, NavLink } from 'react-router-dom'
import './BottomBar.scss'

export const BottomBar = () => {
    return (
        <ul className='bottom__bar'>
            <li className='link'>
                <NavLink
                    to='/'
                >
                    <p>Home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bottom__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </NavLink>
            </li>
            <li className='link'>
                <NavLink to='/about'>
                    <p>Sobre Mi</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bottom__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </NavLink>
            </li>
            <li className='link'>
                <NavLink to='/contact'>
                    <p>Contacto</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bottom__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </NavLink>
            </li>
        </ul>
    )
}
