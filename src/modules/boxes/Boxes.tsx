import React from 'react'
import './Boxes.css';

function Boxes() {
    return (
        <div>
            <section id="product-overview">
                <h1>Get the freedom you deserve.</h1>
            </section>
            <section id="plans">
                <h1 className="section-title">Choose Your Plan</h1>
                <div>
                    <article className='plan'>
                        <h1 className='plan__title'>FREE</h1>
                        <h2 className='plan__price'>$0/month</h2>
                        <h3>For hobby projects or small teams.</h3>
                        <ul className='plan__features'>
                            <li className='plan__feature'>1 Workspace</li>
                            <li className='plan__feature'>Unlimited Traffic</li>
                            <li className='plan__feature'>10GB Storage</li>
                            <li className='plan__feature'>Basic Support</li>
                        </ul>
                        <div>
                            <button className='button'>CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article className='plan plan--highlighted'>
                        <h1 className='plan__annotation'>RECOMMENDED</h1>
                        <h1 className='plan__title'>PLUS</h1>
                        <h2 className='plan__price'>$29/month</h2>
                        <h3>For ambitious projects.</h3>
                        <ul className='plan__features'>
                            <li className='plan__feature'>5 Workspaces</li>
                            <li className='plan__feature'>Unlimited Traffic</li>
                            <li className='plan__feature'>100GB Storage</li>
                            <li className='plan__feature'>Plus Support</li>
                        </ul>
                        <div>
                            <button className='button'>CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article className='plan'>
                        <h1 className='plan__title'>PREMIUM</h1>
                        <h2 className='plan__price'>$99/month</h2>
                        <h3>Your enterprise solution.</h3>
                        <ul className='plan__features'>
                            <li className='plan__feature'>10 Workspaces</li>
                            <li className='plan__feature'>Unlimited Traffic</li>
                            <li className='plan__feature'>Unlimited Storage</li>
                            <li className='plan__feature'>Priority Support</li>
                        </ul>
                        <div>
                            <button className='button'>CHOOSE PLAN</button>
                        </div>
                    </article>
                </div>
            </section>
            <section>
                <h1>Many Good Reasons to Stick Around</h1>
                <ul>
                    <li>
                        <div>

                        </div>
                        <p>3,857,000 Trusting Customers</p>
                    </li>
                    <li>
                        <div>

                        </div>
                        <p>99.999% Uptime Guarantee</p>
                    </li>
                    <li>
                        <div>

                        </div>
                        <p>Lightning Fast CDN</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Boxes