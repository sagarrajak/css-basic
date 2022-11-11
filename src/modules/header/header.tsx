import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';
function Header() {
    return (
        <>
            <header className='main-header'>
                <div>
                    <Link to="/" className='main-header__brand'>
                        {/* uHost  */}
                        <img src={"uhost-icon.png"} alt="Uhost icon"/>
                    </Link>
                </div><nav className='main-nav'>
                    <ul className='main-nav__items'>
                        <li className='main-nav__item'>
                            <Link to="/details">Details</Link>
                        </li>
                        <li className='main-nav__item'>
                                <Link to="/customer">Customer</Link>
                        </li>
                        <li className='main-nav__item main-nav__item--cta'>
                            <a href="start-hosting/index.html">Start Hosting</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    )
}

export default Header