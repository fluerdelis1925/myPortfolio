import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from '../../util';

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
           <li className={styles.link}> 
           <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon"/>
            <a href='mailto:insulardaniel11@gmail.com'>insulardaniel11@gmail.com</a>
           </li>

           <li className={styles.link}> 
           <img src={getImageUrl("contact/linkedinIcon.png")} alt="email-icon"/>
            <a href='https://www.linkedin.com/in/daniel-insular-dazup1925'>linkedIn/DanielInsular</a>
           </li>
        
           <li className={styles.link}>  
           <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon"/>
            <a href='https://github.com/fluerdelis1925'>github.com/DanielInsular</a>
           </li>

        </ul>
    </footer>
  )
}

export default Contact