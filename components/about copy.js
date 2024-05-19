import React from 'react';
import styles from '../styles/module.css/about.module.css';

const BioSection = ({theData}) => {
  
  return (
    <section id="Bio" className={styles.about}>
        <article>
          <img src="/iiii.png" loading="lazy" alt="I"/>
        </article>
        <aside>
          <h2>About Sylvie?</h2>
          <p>
            {
              theData && theData.intro &&(
                <>
                  Sylvie is a {' '}
                  <span className={styles['textspan']}>
                    Full Stack Developer
                  </span>
                  {', '}
                  <span className={styles['ttextspan']}> 
                    UI/UX
                  </span>
                  and
                  <span className={styles['textspan']}> 
                    Web Designer
                  </span>
                  {theData.intro && theData.intro.split('. ')[0]}
                  <br />‍<br />
                  {theData.intro && theData.intro.split('. ')[1]}
                </>
              )
            }
          </p>
          <a href="#contact" className={styles.link}>
            get in touch &gt;
          </a>
        </aside>
    </section>
  );
};

export default BioSection;
