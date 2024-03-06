import React from 'react'
import styles from './About.module.css'
import { NavLink } from 'react-router-dom';
import leaders from '../../data/leadership.json'

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.section1}>
                <img src="./images/home-bg.jpg" alt="about-bg" />
                <div className={styles.text}>
                    <h1 className={styles.textOne}>About</h1>
                    <p className={styles.textTwo}>
                        Power up your productivity with our reliable laptop batteries
                    </p>
                </div>
            </div>

            <div className={styles.section2}>
                <div className={styles.aboutText}>
                    <h3>YOUR ONE-STOP SHOP FOR QUALITY LAPTOP BATTERIES</h3>
                    <p>Examob is specialize in manufacturing and distributing high-quality laptop batteries. We understand the importance of having a reliable laptop battery, whether you are a business professional, student, or someone who needs to stay connected on-the-go. That's why we are dedicated to providing the best possible products to our customers.</p>
                    <p>Our team of experts uses state-of-the-art technology and top-grade materials to manufacture laptop batteries that meet or exceed industry standards. We are committed to providing excellent service to our customers, and our knowledgeable staff is always ready to assist with any questions or concerns.</p>
                </div>
                <div class={styles.progressContainer}>
                    <div className={styles.progressBar}>
                        <h3>BRANDING</h3>
                        <div class="progress" >
                            <div class="progress-bar" role="progressbar" style={{ width: "95%", backgroundColor: "black" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                        </div>

                    </div>
                    <div className={styles.progressBar}>

                        <h3>OUR DAILY ORDER</h3>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: "80%", backgroundColor: "black" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                    </div>
                    <div className={styles.progressBar}>

                        <h3>SATISFIED CUSTOMERS</h3>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: "80%", backgroundColor: "black" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.leadersContainer}>
                <h3>Leadership Team</h3>
                <div className={styles.teams}>
                    {leaders.map((leader, id) => {
                        return (
                            <div key={id} className={styles.team}>
                                <div className={styles.teamImageContainer}>
                                    <img src={leader.image} alt={leader.name} />
                                </div>
                                <h3>{leader.name}</h3>
                                <p>{leader.designation}</p>
                            </div>
                        )
                    })}
                </div>
            </div>




        </div>
    );
}