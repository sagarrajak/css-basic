import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/header'

function Layout() {
    return (
        <>
            <Header />
            <div id="content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout