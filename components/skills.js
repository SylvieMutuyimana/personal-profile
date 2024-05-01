// In Projects.js
import componentStyles from '../styles/module.css/components.module.css';

const Skills = ({theData}) => {
    const returnData = ()=>{
      if(theData&&Object.keys(theData).length > 0){
        return theData
      }else{
        return {
          "databases": [], "frameworks": [],
          "interests": [], "languages": [],
          "tools": []
        }
      }
    }
    return (
        <div className={componentStyles.grid}>
            {Object.entries(returnData()).map(([skillName, skills]) => (
              <div className={componentStyles.card} key={skillName}
                target="_blank" rel="noopener noreferrer">
                <h2>{skillName}</h2>
                <hr/>
                <div className={componentStyles.skills}>
                  {(skills && skills.length>0 ? skills : Array.from({length:4})).map((theskill, index)=>(
                      <article key={index}> 
                        {
                          theskill &&
                          (skillName === 'tools' || skillName === 'interests'? theskill : theskill.name)
                        }
                      </article>
                    ))
                  }
                </div>
              </div>
            ))}
        </div>
    );
};

export default Skills;
