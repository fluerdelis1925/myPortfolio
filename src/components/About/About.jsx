import React from 'react'
import { getImageUrl } from '../../util'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")}/>
                <div className={styles.aboutitemText}>
                    <h3>Front End Developer</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis natus vitae, laboriosam odit nobis beatae.</p>
                </div>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")}/>
                <div  className={styles.aboutitemText}>
                    <h3>BackEnd End Developer</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis natus vitae, laboriosam odit nobis beatae.</p>
                </div>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")}/>
                <div className={styles.aboutitemText}>
                    <h3>UI Designer</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis natus vitae, laboriosam odit nobis beatae.</p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About