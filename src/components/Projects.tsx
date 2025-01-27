import '../css/Projects.css'

interface ProjectsElements {
    imagem: string;
    titulo: string;
    descricao: string;
    link: string;
    tipoProjeto: string;
}

function Projects( {imagem,titulo,descricao,link,tipoProjeto}: ProjectsElements){
    return(
        
        <div className='project' >

            <div className='card-projects'>
                <h3>{titulo}</h3>
                <h4>{tipoProjeto}</h4>
                <img src={imagem} alt="" />
                <p>{descricao}</p>
                <a rel='noopener noreferrer' target='_blank' href={link}>Clique aqui para ver o projeto</a>
            </div>

        </div>
    
    );
}

export default Projects;