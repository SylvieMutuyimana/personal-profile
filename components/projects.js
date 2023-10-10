// In Projects.js
import componentStyles from '../styles/module.css/components.module.css';

const Projects = () => {
  const theData = {
    "huge":[
        {
            "id": "6239aacb-aeb0-4d58-a197-b099d8767bec", "name": "Share Ride",
            "collaborators": ["Polie Vicia", "Adeline Tuyizere", "Diane Uwiduhaye"],
            "host": "#", "repository":"",
            "languages":["HTML", "CSS", "Django", "JavaScript"],
            "summary":"App that connects car owners and passengers",
            "status":"done"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-b099767bevfc", "name": "Personal Profile",
            "collaborators": "",
            "host": "#", "repository":"",
            "languages":["HTML", "CSS","Flask", "JSON", "React"],
            "summary":"My Personal Profile showcasing my projects and skills",
            "status":"development"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-f099d8767bec", "name": "Kenya Housing Prediction Model",
            "collaborators": ["Adeline Tuyizere", "Diane Uwiduhaye"],
            "host": "https://kenya-rentalprices.onrender.com/", "repository":"",
            "languages":["HTML", "CSS", "Flask", "Python", "JavaScript"],
            "summary":"A housing prediction model for citizens to find the best city for living",
            "status":"done"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-f099d8767bec", "name": "Fully Automated House Model",
            "collaborators": ["Adeline Tuyizere", "Diane Uwiduhaye"],
            "host": "#", "repository":"",
            "languages":["C++"],
            "summary":"Full Automated House Model with security measures",
            "status":"done"
        },
        {
            "id": "6239aacb-aeb0-4d58-af97-f099d8767bec", "name": "Fana Iyawe UI",
            "collaborators": ["Adeline Tuyizere", "Diane Uwiduhaye"],
            "host": "#", "repository":"",
            "languages":["Figma"],
            "summary":"Connect with other Rwanda team fans",
            "status":"development"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-f099d8767bec", "name": "SIHA Health App",
            "collaborators": ["Adeline Tuyizere", "Sunday Moses"],
            "host": "#", "repository":"",
            "languages":["Flutter", "Firebase"],
            "summary":"A health app to connect patients and doctors",
            "status":"done"
        }
    ],
    "mini":[
        {
            "id": "6239aacb-aeb0-4d58-a197-b099d8767bec", "name": "Membership App",
            "collaborators": "",
            "host": "#", "repository":"",
            "languages":["Java"],
            "summary":"An organization membership tracking and registration app",
            "status":"done"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-b099d8767bec", "name": "a Membership App",
            "collaborators": "",
            "host": "#", "repository":"",
            "languages":["Python"],
            "summary":"An organization membership tracking and registration app",
            "status":"done"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-b099d8767bec", "name": "Banking Management System",
            "collaborators": "",
            "host": "#", "repository":"",
            "languages":["Python"],
            "summary":"A banking system",
            "status":"done"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-f099d8767bec", "name": "Weather App",
            "collaborators": ["Adeline Tuyizere", "Sunday Moses"],
            "host": "#", "repository":"",
            "languages":["Figma"],
            "summary":"A weather app with activity and accommodation suggestions",
            "status":"done"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-f099d8767bec", "name": "Learning Platform",
            "collaborators": ["Polie Vicia"],
            "host": "#", "repository":"",
            "languages":["Figma"],
            "summary":"A school online learning platform ",
            "status":"done"
        },
        {
            "id": "6239aacb-aeb0-4d58-a197-f099d8gfg7bec", "name": "Virtual Lab",
            "collaborators": ["Polie Vicia", ""],
            "host": "#", "repository":"",
            "languages":["Unity", "C#"],
            "summary":"A virtual lab allowing students to learn biology through interraction with the virtual lab",
            "status":"done"
        } 
    ],
    "client_projects":[
        {
            "id": "6239aacb-aeb0-4d58-a197-f099d8gggec", "name": "Rwanda Scouts Organisation",
            "collaborators": "",
            "host": "#", "repository":""
        } 
    ]
  }
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
                          <i>Contributors: {project.collaborators.length}</i>
                        </p>
                    </a>
                ))
            )}
        </div>
    );
};

export default Projects;
