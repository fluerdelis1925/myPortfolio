import React from 'react'
import { getImageUrl } from '../../util';
import styles from "./ProjectCard.module.css";

const ProjectCard = ({project: {title, imageSrc, description,skills, demo, source}}) => {
  return (
    <div className={styles.container}>
    <img src={getImageUrl (imageSrc)} alt={`image of ${title}`} className={styles.image}/>
     <h3 className={styles.title}>{title}</h3>
     <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return(
            <li key={id} className={styles.skill}>{skill}</li>
          )
        })}
      </ul>
        <div>
            <a href={demo} className={styles.links}>Demo</a>
            <a href={source} className={styles.link}>Demo</a>
        </div>
</div>
  )
}

export default ProjectCard