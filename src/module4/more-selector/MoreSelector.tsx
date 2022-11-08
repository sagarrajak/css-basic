import React from 'react'
import './MoreSelector.css'


function MoreSelector() {
    return (
        <div>
            <nav>
                <a href="#intro" className="active">Intro</a>
                <a href="#outro">Outro</a>
            </nav>
            <section id="intro" className="main-section highlighted">
                <p>This is the intro section.</p>
            </section>
            <section id="outro" className="main-section">
                <p>This is the outro section.</p>
            </section>

        </div>
    )
}

export default MoreSelector