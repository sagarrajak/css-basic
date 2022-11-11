import React from 'react'
import Details from '../details/Details';
import Plans from '../plans/Plans';
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer className="main-footer">
                <nav>
                    <ul className="main-footer__links">
                        <li className="main-footer__link">
                            <a href="#">Support</a>
                        </li>
                        <li className="main-footer__link">
                            <a href="#">Terms of Use</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}

export default Footer