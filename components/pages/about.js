// In About.js
import React, { useEffect, useState } from 'react';
import componentStyles from '../../styles/module.css/components.module.css';
import styles from '../../styles/module.css/about.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = ({theData}) => {
  const [allSkills, setSkills] = useState(null);

  useEffect(()=>{
    if(theData?.technologies?.all  && !allSkills) {
      setSkills(theData?.technologies?.all)
    }
  },[theData])

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
                  {theData.intro && theData.intro.split('. ').map((sentence, index, array)=>(
                    <React.Fragment key={index}>
                      {sentence}.
                      {index < array.length - 1 && (<><br /><br /></>)}
                    </React.Fragment>
                  ))}
                </>
              )
            }
          </p>
          <br/>
          <a href="#contact" className={styles.link}>
            Get in touch &gt;
          </a>
        </aside>
      </section>
      </div>
    );
};

export default About;
