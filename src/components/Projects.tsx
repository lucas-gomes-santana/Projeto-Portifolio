import { useNavigate } from 'react-router-dom';
import '../css/Projects.css';

// Definindo o tipo das props que o componente espera
interface ProjectElements {
    image: string;
    title: string;
    description: string;
    link: string;
    projectType: string;
}

interface ProjectsProps {
    projects: ProjectElements[];
}

function Projects({ projects }: ProjectsProps) {
    const navigate = useNavigate();

    return (
        <section className='main-container'>
            <h2>My Projects:</h2>

            <div className="project-container">
                {projects.map((project, index) => (

                    <div className="card-projects" key={ index }>

                        <h3>{project.title}</h3>
                        <h4>{project.projectType}</h4>
                        <img src={project.image} alt="" />
                        <p>{project.description}</p>
                        <a
                            rel='noopener noreferrer'
                            target='_blank'
                            href={project.link}
                        >
                            Get the Source Code
                        </a>

                    </div>
                ))}
            </div>

            <button className='return-button' onClick={() => navigate(-1)}>Return to Previous Page</button>
        </section>
    );
}

export default Projects;
