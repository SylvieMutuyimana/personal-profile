// In Projects.js
import componentStyles from '../styles/module.css/components.module.css';

const Skills = () => {
  const theData = {
    "languages":[
        {"name":"JavaScript", "level":"medium", "projects":"4++"},
        {"name":"dart", "level":"medium", "projects":1},
        {"name":"PHP", "level":"medium", "projects":1},
        {"name":"Python", "level":"medium", "projects":"4++"},
        {"name":"C#", "level":"medium", "projects": 1},
        {"name":"C+", "level":"medium", "projects": 1},
        {"name":"C", "level":"medium", "projects":1},
        {"name":"Java", "level":"medium", "projects":2},
        {"name":"Html","level":"advanced", "projects":"4++"},
        {"name":"CSS","level":"advanced", "projects":"4++"},
        {"name":"SCSS","level":"advanced", "projects":"4++"}
    ],
    "frameworks":[
        {"name":"React", "level":"medium", "projects":"4++"},
        {"name":"Next", "level":"medium", "projects":"4++"},
        {"name":"Django Flask", "level":"medium", "projects":"4++"},
        {"name":"Flutter", "level":"medium", "projects":1}
    ],
    "tools":[
        "VsCode", "Windows", "Figma", "SPSS", "Access", 
        "Git && Github", "more ..."
    ],
    "databases":[
        {"name":"SQL","level":"medium", "projects":2},
        {"name":"JSON","level":"medium", "projects":4},
        {"name":"MySQL","level":"medium", "projects":2},
        {"name":"MongoDB","level":"medium", "projects":3}
    ],
    "interests":[
        "Photography", "Videography","Graphic Design",
        "Chess", "Ludo", "Electronics","Hardware designs"
    ]
}
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
                        <div className={componentStyles.skills}>
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
                        </div>
                    </a>
                ))
            )}
        </div>
    );
};

export default Skills;
