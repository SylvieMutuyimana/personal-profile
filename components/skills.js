// In Projects.js
import componentStyles from '../styles/module.css/components.module.css';

const Skills = ({ theData }) => {
  console.log("theData: ", theData)
    return (
        <div className={componentStyles.grid}>
            {theData && Object.keys(theData).length > 0 && (
                Object.entries(theData).map(([skillName, skills]) => (
                    <a href={"#"} className={componentStyles.card}
                        target="_blank" rel="noopener noreferrer">
                        <h2>
                          {skillName}
                        </h2>
                        <hr/>
                        <p className={componentStyles.skills}>
                          {skills && skills.length>0 && (
                            skills.map((theskill, index)=>(
                              <article> 
                                {
                                  skillName === 'tools' || skillName === 'interests'? theskill
                                  :theskill.name
                                }
                               
                              </article>
                            ))
                          )}
                        </p>
                    </a>
                ))
            )}
        </div>
    );
};

export default Skills;
