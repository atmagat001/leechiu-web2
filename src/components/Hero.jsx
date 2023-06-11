import React from 'react'
import Header from './Header'

function Hero() {
  return (
    <div className="main-container">
       <div className="cont-background">
            <Header />
            <div className='hero'>
                <div className="hero-container ">
                    <div className="hero-background cont-column">
                        <h1>Our Insights, Your Success</h1>
                        <h2>Get our latest Real Estate Market Insights</h2>
                        <div className='cont-row'>
                            <input type="text" placeholder='Enter your email address' />
                            <button>Download</button>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="service-card-cont">
                            <div className="service-card">
                                <h2>Office Leasing</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sunt rerum eius, ipsam cum fugiat magni exercitationem aspernatur? Accusamus minus earum assumenda et. Consequatur possimus et beatae. Facilis, quibusdam vitae.</p>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                        <div className="service-card-cont">
                            <div className="service-card">
                                <h2>Investment Sales</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sunt rerum eius, ipsam cum fugiat magni exercitationem aspernatur? Accusamus minus earum assumenda et. Consequatur possimus et beatae. Facilis, quibusdam vitae.</p>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                        <div className="service-card-cont">
                            <div className="service-card">
                                <h2>Research and Valuation</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sunt rerum eius, ipsam cum fugiat magni exercitationem aspernatur? Accusamus minus earum assumenda et. Consequatur possimus et beatae. Facilis, quibusdam vitae.</p>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                        <div className="service-card-cont">
                            <div className="service-card">
                                <h2>Residential</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sunt rerum eius, ipsam cum fugiat magni exercitationem aspernatur? Accusamus minus earum assumenda et. Consequatur possimus et beatae. Facilis, quibusdam vitae.</p>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                        <div className="service-card-cont">
                            <div className="service-card">
                                <h2>Hospitality, Tourism and Leisure</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sunt rerum eius, ipsam cum fugiat magni exercitationem aspernatur? Accusamus minus earum assumenda et. Consequatur possimus et beatae. Facilis, quibusdam vitae.</p>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                        <div className="service-card-cont">
                            <div className="service-card">
                                <h2>Project Selling</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sunt rerum eius, ipsam cum fugiat magni exercitationem aspernatur? Accusamus minus earum assumenda et. Consequatur possimus et beatae. Facilis, quibusdam vitae.</p>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       </div>

    </div>

    
  )
}

export default Hero