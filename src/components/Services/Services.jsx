import React from 'react'
import styles from './Services.module.css'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.section1}>
                <img src="./images/home-bg.jpg" alt="about-bg" />
                <div className={styles.text}>
                    <h3 className={styles.textOne} style={{ color: '#ffffff' }}>Services</h3>
                    <p className={styles.textTwo}>
                        We manufacture batteries for various brands and models, holding certifications such as BIS, RoHS, CE, and FCC. Our commitment to quality, reliability, and environmental responsibility sets us apart as a trusted provider in the industry. Choose us for 100% quality-assured products that meet international standards and deliver exceptional performance.
                    </p>
                </div>
            </div>


            <div className={styles.servicesContainer}>

                <div className={styles.services}>
                    <h4>Services</h4>

                    <ul>
                        <li>Buy & Sell of refurbished smartphones, laptops and other electronic devices.</li>
                        <li>Third Party Laptop Batteries manufacturer.</li>
                        <li>Certified E waste Recycler.</li>
                        <li>B2B Partner</li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <h4>Laptop Battery Manufacturing</h4>

                    <ul>
                        <li>100% Quality Assured Products.</li>
                        <li>6 step quality process managed by experienced technical team</li>
                        <li>Robust Quality check for the raw material used</li>
                        <li>Multiple quality checkpoints during manufacturing the batteries at every stage.</li>
                        <li>Multi brand/model manufacturing</li>
                        <li>Certifications – BIS, RoHS, CE, FCC</li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <h4>Refurbishment Facility</h4>

                    <ul>
                        <li>Refurbishment facility of one million square feet</li>
                        <li>Large Supply and Demand network</li>
                        <li>Provides best Buyback for your old products</li>
                        <li>Handles 25+ Brands more than 1000+ models</li>
                        <li>50K+ Retails points</li>
                        <li>Deals both in B2B & B2C - Online and Offline Presence</li>
                        <li>Tech Enabled Services</li>
                    </ul>
                </div>
            </div>

            <div className={styles.seeMoreContainer}>
                <h2>Want to see more?</h2>
                <a to="www.mobitechllp.com">Visit Our Website</a>
            </div>
        </div>
    )
}

export default Services
