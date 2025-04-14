import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={("assets/about/aboutImage.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={("assets/about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Passionate about creating engaging and responsive web interfaces, I bring a solid foundation in HTML, CSS, and JavaScript. 
               Eager to leverage modern frameworks like React to build dynamic and user-friendly websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("assets/about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Enthusiastic about building robust and efficient backend systems, I focus on developing high-performance APIs and optimizing server-side processes. 
              I am eager to apply my skills in technologies like Node.js and databases to create scalable and reliable solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={("assets/about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>Web Developer & DSA Enthusiast</h3>
            <p>
             I design engaging web interfaces and develop scalable systems while applying my knowledge of data structures and algorithms to solve complex problems. 
             My focus is on creating efficient, high-performance solutions and optimizing user experiences through thoughtful design and technical expertise.
            </p>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
