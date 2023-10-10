// In Projects.js
import componentStyles from '../styles/module.css/components.module.css';

const Projects = ({ theData }) => {
  const colors = {
    'done':'#09c509', development:'#01afff'
  }
  const statusColor= (status)=> colors[status]
    return (
        <div className={componentStyles.grid}>
            {theData && theData?.huge?.length > 0 && (
                theData?.huge.map((project, index) => (
                    <a href={project.host} className={`${componentStyles.card} ${componentStyles.project}`}
                        target="_blank" rel="noopener noreferrer" key={project._id}>
                        <aside className={componentStyles[project.status]}>{project.status}</aside>
                        <h2>
                            {project.name} <i class="fa fa-arrow-right"></i>
                        </h2>
                        <hr/>
                        <div>
                        <aside>
                          <p> </p>
                          </aside>
                        </div>
                        <div>
                        </div>
                        <p>{project.summary}</p>
                        <p className={componentStyles.top}>
                          <article>
                          <i>Contributors: {project.collaborators.length}</i>
                          </article>
                        </p>
                    </a>
                ))
            )}
        </div>
    );
};

export default Projects;
