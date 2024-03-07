import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from './Home.module.css'
import features from '../../data/features.json'
import icons from '../../data/icons.json'
import homepageBlogs from '../../data/homepageBlogs.json'
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <div className={styles.container} >
            <div className={styles.imageContainer}>
                <img src="./images/background.jpg" alt="bg" />
                <div className={styles.text}>
                    <h5 className={styles.textOne}>Hello</h5>
                    <h1 className={styles.textTwo}>WE ARE EXAMOB</h1>
                    <NavLink to="/about" className={styles.buttonLearn}>
                        Learn More
                    </NavLink>
                </div>

                <div className={styles.blackStrap}>
                    <div>
                        <p>LOOKING FOR A BEST QUALITY LAPTOP BATTRIES?</p>
                        <h2>WE ARE ALWAYS HERE FOR YOU</h2>
                    </div>
                    <a href="https://www.mobitechllp.com/category/Laptop/Battery" target='_blank'>Buy Now</a>
                </div>

                <div className={styles.features}>
                    {features.map((feature, id) => {
                        return (
                            <div key={id} className={styles.feature}>
                                <div className={styles.featureImageContainer}>
                                    <img src={feature.imageSrc} alt={feature.title} />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.icons}>

                    {
                        icons.map((icon, id) => {
                            return (
                                <div key={id} className={styles.iconsContainer}>
                                    <div className={styles.iconImageContainer}>
                                        <img src={icon.imageSrc} alt={icon.title} />
                                    </div>
                                    <h3>{icon.number}</h3>
                                    <p>{icon.text}</p>
                                </div>
                            )
                        })
                    }

                </div>

                <div className={styles.blogs}>
                    {homepageBlogs.map((homepageBlog, id) => {
                        return (
                            <div key={id} className={styles.blog}>
                                <div className={styles.blogImageContainer}>
                                    <img src={homepageBlog.imageSrc} alt={homepageBlog.blogTitle} />
                                </div>
                                <h3>{homepageBlog.blogTitle}</h3>
                                <p>{homepageBlog.blogDecsription}</p>
                                <a href={homepageBlog.link}>Read More</a>
                            </div>
                        )
                    })}
                </div>

            </div>


        </div >
    );
}