// In Projects.js
import React, { useEffect, useState } from 'react';
import componentStyles from '../styles/module.css/components.module.css';

const Projects = ({theData}) => {
    const [allProjects, setProjects] = useState(null);

    useEffect(() => {
        if (theData && !allProjects) {
            setProjects(theData.huge.slice(0,4));
        }
    }, [theData]);

    return (
        <div className={componentStyles.grid}>
            {(allProjects && allProjects.length > 0 ? allProjects : Array.from({ length: 4 })).map((project, index) => (
                <a href={project?.host || null} className={`${componentStyles.card} ${componentStyles.project}`} target="_blank" rel="noopener noreferrer" key={index}>
                    <aside className={componentStyles[project?.status]}>{project?.status}</aside>
                    <div className={componentStyles.imgCont}>
                        {
                            project?.img &&(
                                <Image src={project.img}/>
                            )
                        }
                    </div>
                    <hr/>
                    <h2>
                        {project?.name && (
                            <>
                                {project?.name}
                                <i className="fa fa-arrow-right" />
                            </>
                        )}
                    </h2>
                    <div>
                        <aside>
                            <p></p>
                        </aside>
                    </div>
                    <div>{project?.summary}</div>
                    <div className={componentStyles.contri}>
                        {
                            project?.languages && project?.languages?.length>0 && 
                            project.languages.map((language, index)=>{
                                <React.Fragment key={index}>{language}</React.Fragment>
                            })
                        }
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Projects;
