// In Projects.js
import React from 'react';
import componentStyles from '../../styles/module.css/components.module.css';
import styles from '../../styles/module.css/about.module.css';

const Education_Exp = () => {
  const theData = {
    'education':[
      {
        school:'SOS Herman Gmeiner International College', degree:'IGCSE Certificate',
        course:'IGCSE Certificate', course:'CS, Math, Physics, Chem', 
      },
      {
        school:'SOS Herman Gmeiner International College', degree:'International Baccalaurette Diploma',
        course:'ITGS, Math, Physics, Soc. & cult. Anthropology', 
      },
      {
        school:'African Leadership University', degree:'Bachelor of Science', course: 'Computer Science',
        start: '2021', end: '2024'
      }
    ], 
    'experience':[
      {}
    ]
  }
    return (
      <div className={`${componentStyles.grid} ${componentStyles.nogrid}`}>
        <section id="Bio" className={styles.Education_Exp}>
        </section>
      </div>
    );
};

export default Education_Exp;
