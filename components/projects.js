import componentStyles from '../styles/module.css/components.module.css'
const Projects = () => {
  const link = "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"

  const myProjects = [
    {name:"Share Ride", description: "App that connects car owners and passengers", link:link},
    {name:"House Model", description: "Full Automated House Model with security measures", link:link},
    {name:"Fana Iyawe", description: "Connect with other Rwanda team fans", link:link},
    {name:"Personal Profile", description: "My Personal Profile showcasing my skills ", link:link},
  ]

  return (
    <div className={componentStyles.grid}>
        {
          myProjects && myProjects.length > 0 &&(
            myProjects.map((project, index)=>(
              <a href = {project.link} className={componentStyles.card}
                target="_blank" rel="noopener noreferrer">
                <h2>
                  {project.name} <span>-&gt;</span>
                </h2>
                <p>{project.description}</p>
              </a>
            ))
          )
        }
    </div>
);
};

export default Projects;
