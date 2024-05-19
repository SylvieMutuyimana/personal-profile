import React from 'react';
import styles from '../styles/module.css/about.module.css';

const BioSection = ({myAbout}) => {
  
  return (
    <section id="Bio" className={`${styles.section} ${styles.home}`}>
      <div className={`container-4 ${styles['w-container']}`}>
        <div>
          <img
            src="https://cdn.prod.website-files.com/62acc17f0bea707cb5017f40/62ad1c016ceadf6c3de09209_Crystal.svg"
            loading="lazy"
            alt=""
            className={styles['image-8']}
          />
          <img
            src="https://cdn.prod.website-files.com/62acc17f0bea707cb5017f40/62d1c3deb4d0a18c6ec4d3ae_me.svg"
            loading="lazy"
            width="350"
            alt="A photo of Jey in a blazer smiling and laughing. They have a shaved head that looks a heatmap with blobs of purple fading to pink to mint. Their eyebrows are dyed a bright electric blue, and they complete the look with moon earrings and a non-binary lapel button pin."
            className={styles['image-3']}
          />
        </div>
        <div className={styles['jey-bio']}>
          <h2 className={styles['heading-13']}>Who is Sylvie?</h2>
          <p className={styles['paragraph-6']}>
            {
              myAbout && myAbout.intro &&(
                <>
                  Sylvie is a {' '}
                  <span className={styles['text-span-8']}>
                    Full Stack Developer
                  </span>
                  {', '}
                  <span className={styles['text-span-8']}> 
                    UI/UX
                  </span>
                  and
                  <span className={styles['text-span-8']}> 
                    Web Designer
                  </span>
                  {myAbout.intro && myAbout.intro.split('. ')[0]}
                  <br />‍<br />
                  {myAbout.intro && myAbout.intro.split('. ')[1]}
                </>
              )
            }
          </p>
          <a href="#Footer" className={`${styles.link} dark`}>
            get in touch &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
