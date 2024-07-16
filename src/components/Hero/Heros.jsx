import React from 'react'
import { getImageUrl } from '../../util'
import styles from "./Hero.module.css"

const Heros = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi Im Daniel</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, unde. Eveniet obcaecati officiis minus repellendus quidem dolore et explicabo omnis?</p>
            <a className={styles.contentBtn} href='mailto:insulardaniel11@gmail.com'>Contact Me!</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Daniel Insular Photo" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur}/>
    </section>
  
  )
}

export default Heros