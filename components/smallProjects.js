// In smallProjects.js
import { useEffect, useState } from 'react';
import componentStyles from '../styles/module.css/components.module.css';

const SmallProjects = ({ theData, name, expandedSection }) => {
    const [allProjects, setProjects] = useState(null);

    useEffect(()=>{
        if(name===expandedSection && theData && theData.mini) {
            setProjects(theData.mini)
        }else if (name!==expandedSection && theData && theData.mini){
            setProjects(theData.mini.slice(0,4))
        }
    },[expandedSection, theData])

    return (
        <div className={componentStyles.grid}>
            {(allProjects && allProjects.length > 0 ? allProjects : Array.from({ length: 4 })).map((project, index) => (
                <a href={project?.host || null} className={`${componentStyles.card} ${componentStyles.project}`} target="_blank" rel="noopener noreferrer" key={index}>
                    <aside className={componentStyles[project?.status]}>{project?.status}</aside>
                    <h2>
                        {project?.name && (
                            <>
                                {project?.name}
                                <i className="fa fa-arrow-right" />
                            </>
                        )}
                    </h2>                    
                    <hr/>
                    <div>
                        <aside>
                            <p></p>
                        </aside>
                    </div>
                    <div>{project?.summary}</div>
                    <div className={componentStyles.contri}>
                        <i>{project?.collaborators && `Contributors: ${project.collaborators.length || 0}`}</i>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SmallProjects;
