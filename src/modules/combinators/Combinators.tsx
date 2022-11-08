import React from 'react'
import "./Combinators.css";

function Combinators() {
    return (
        <div>
            <h1 id="assignment-instructions">Assignment - Selectors &amp; Properties</h1>
            <ol>
                <li>Style the above <code>&lt;h1&gt;</code> tag to use any color of your choice and a <code>sans-serif</code> font.</li>
                <li>Style all <code className='highlighted-code'>&lt;code&gt;</code> tags to use the <code className='highlighted-code'>monospace</code> font-family and have red text.</li>
                <li>Use a class selector to ensure that the <code>&lt;code&gt;</code> elements in the second <code>&lt;li&gt;</code> element have a different color (e.g. green).</li>
                <li>Switch the order of the rules you created and use the dev tools of your browser to understand how specifity resolves conflicts (for the <code>&lt;code&gt;</code> elements).</li>
                <li>Set a default font (e.g. sans-serif) for the entire content of your page and use "Inheritance" to change the font of the <code>&lt;li&gt;</code> items, too.</li>
                <li>Use a combinator to give all <code>&lt;li&gt;</code> elements but the first one (!) a black background and white text color (don't worry if the numbers disappear).</li>
                <li>Use another combinator to now give all <code>&lt;li&gt;</code> inside an <code>&lt;ol&gt;</code> element a black background and white text color.</li>
            </ol>
        </div>
    )
}

export default Combinators