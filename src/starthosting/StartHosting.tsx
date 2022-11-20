import React from 'react'
import './StartHosting.css';

export const StartHosting = () => {
    return (
        <main className="signup-page">
        <h1 className="signup-title">Awesome! Let's dive right in!</h1>
        <form action="index.html" className="signup-form">
            <label htmlFor="title">Title</label>
            <select id="title">
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
            </select>
            <label htmlFor="first-name">First name</label>
            <input type="text" id="first-name" />
            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name"/>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
            <div className='signup-form__checkbox'>
                <input type="checkbox" id="agree-terms"/>
                <label htmlFor="agree-terms">Agree to
                    <a href="#">Terms &amp; Conditions</a>
                </label>
            </div>
            
            <button type="submit" className="button">Sign Up</button>
        </form>
    </main>
    )
}
