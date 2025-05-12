import React from 'react'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Aayushi Khator</h1>
            <p className={styles.description}>
                I'm a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. 
                As a fresher, I'm eager to apply my skills in real-world projects and contribute to innovative solutions.
                 {/* I'm committed to continuous learning and growing in the ever-evolving tech landscape. */}
            </p>
            <a href="/assets/Hero/AayushiResume_fs.pdf" download className={styles.contactBtn}>Resume</a>
        </div>
        <img src={("/assets/Hero/HeroImage.jpeg")} alt="img" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section> 
  )
}

export default Hero;
