// In Projects.js
import React from 'react';
import componentStyles from '../styles/module.css/components.module.css';
import styles from '../styles/module.css/about.module.css';

const Projects = ({theData}) => {
    return (
      <div className={`${componentStyles.grid} ${componentStyles.nogrid}`}>
        <section id="Bio" className={styles.about}>
        <article>
          <img src="/ii.png" loading="lazy" alt="I" width={"200px"}/>
        </article>
        <aside>
          <p>
            {
              theData && theData.intro &&(
                <>
                  Sylvie is a {' '}
                  <span className={styles.textspan}>
                    Full Stack Developer
                  </span>
                  {', '}
                  <span className={styles.textspan}> 
                    UI/UX
                  </span>
                  {' '}and{' '}
                  <span className={styles.textspan}> 
                    Web Designer
                  </span>
                  .<br />‍<br />
                  {theData.intro && theData.intro.split('. ')[0]}
                  <br />‍<br />
                  {theData.intro && theData.intro.split('. ')[1]}
                  <br />‍<br />
                </>
              )
            }
          </p>
          <a href="#contact" className={styles.link}>
            Get in touch &gt;
          </a>
        </aside>
    </section>
        </div>
    );
};

export default Projects;
