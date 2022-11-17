import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './header.css';
function Header() {

    const openSideNav = () => {
        let mobileNav: any = document.querySelector(".mobile-nav");
        let backdrop: any = document.querySelector(".backdrop");
        mobileNav.style.display = 'block';
        backdrop.style.display = 'block';
    }

    useEffect(() => {
        let backdrop = document.querySelector<HTMLDivElement>(".backdrop");
        let mobileNav = document.querySelector<HTMLDivElement>(".mobile-nav");
        if (backdrop) {
            backdrop.addEventListener("click", () => {
                if (backdrop)
                    backdrop.style.display = 'none';
                if (mobileNav)
                    mobileNav.style.display = 'none';
            });
        }
    }, []);

    return (
        <>
            <header className='main-header'>
                <div>
                    <button className="toggle-button" onClick={openSideNav}>
                        <span className="toggle-button__bar"></span>
                        <span className="toggle-button__bar"></span>
                        <span className="toggle-button__bar"></span>
                    </button>
                    <Link to="/" className='main-header__brand'>
                        {/* uHost  */}
                        <img src={"uhost-icon.png"} alt="Uhost icon" />
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
                                <Link to="/start-hosting">Start Hosting</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <nav className="mobile-nav">
                <ul className="mobile-nav__items">
                    <li className="mobile-nav__item">
                        <Link to="/details">Details</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link to="/customer">Customers</Link>
                    </li>
                    <li className="mobile-nav__item mobile-nav__item--cta">
                        <Link to="/start-hosting">Start Hosting</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header