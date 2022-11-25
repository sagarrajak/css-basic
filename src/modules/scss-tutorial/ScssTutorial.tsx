import React from 'react'
import './ScssTutorial.scss'

const ScssTutorial = () => {
    return (
        <div>
            <section className="sass-introduction">
                <p>Sass stands for
                    <span className="char-highlight">S</span>yntactically
                    <span className="char-highlight">A</span>wesome
                    <span className="char-highlight">S</span>tyle
                    <span className="char-highlight">S</span>heets and it makes the creation of complex CSS code much easier.</p>
            </section>
            <section className="sass-details">
                <header className="section-header">
                    <h1>Useful Resources</h1>
                </header>
                <ul className="documentation-links">
                    <li>
                        <a className="documentation-link link-important" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass">Using &amp; Installing Sass</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_rules">Nested Rules</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_properties">Nested Properties</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_">Variables</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#lists">Lists &amp; Maps</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/Sass/Script/Functions.html">Built-in Functions</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#import">Better Import</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#partials">Partials</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#media">Advanced @media</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend">Inheritance</a>
                    </li>
                    <li>
                        <a className="documentation-link" href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#defining_a_mixin">Mixins</a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default ScssTutorial
