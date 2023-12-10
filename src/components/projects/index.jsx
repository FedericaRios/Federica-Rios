import React, { useEffect, useState } from 'react'
import toDos from '../../assets/Todos App.png';
import Clima from '../../assets/Weather App.png'
import Pokemon from '../../assets/App pokemon desktop.png'
import Carousel from 'react-bootstrap/Carousel'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import './styles.css';

const Project = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const projects = [
        {
            name: 'ToDos App',
            imgSrc: toDos,
            liveLink: 'https://federicarios.github.io/proyecto-TODOs/',
            sourceLink: 'https://github.com/FedericaRios/proyecto-TODOs/tree/main',
            description: [
                'Permite gestionar las actividades diarias (desarrollada junto al curso de React en Platzi).',
                'Desarrollado con React, JavaScript, HTML, CSS y Responsive Design.',
                'Deployado en GitHub Pages.'
            ],
        },
        {
            name: 'Weather App',
            imgSrc: Clima,
            liveLink: 'https://federicarios.github.io/Weather-App/',
            sourceLink: 'https://github.com/FedericaRios/Weather-App',
            description: [
                'Permite consultar el pronóstico del tiempo para diversas ciudades.',
                'Desarrollado con React, JavaScript, HTML, CSS y Responsive Design.',
                'Obtiene los datos del pronóstico de una API externa.',
                'Deployado en GitHub Pages.'
            ],
        },
        {
            name: 'Pokemon App',
            imgSrc: Pokemon,
            liveLink: 'https://federicarios.github.io/App-pokemon/',
            sourceLink: 'https://github.com/FedericaRios/App-pokemon',
            description: [
                'Permite buscar y conocer información sobre cualquier Pokémon, como sus habilidades.',
                'Desarrollado con React, JavaScript, HTML, CSS y Responsive Design.',
                'Integración de una API para proporcionar datos precisos y actualizados.',
                'Deployado en GitHub Pages.'
            ],
        },
    ];

    return (
        <div className="container" id='projects'>
            <Carousel
                className='carrousel-container'
                interval={null}
                nextIcon={isMobile ? '' : <button className="buttons"><FiChevronRight /></button>}
                prevIcon={isMobile ? '' : <button className="buttons"><FiChevronLeft /></button>}
            >
                {projects.map((project, index) => (
                    <Carousel.Item key={index}>
                        <div className="project-container">
                            <div className="project-item-container">
                                <div className="project-item-show">
                                    <div className="img-item-container">
                                        <img
                                            className="item-img"
                                            src={project.imgSrc}
                                            alt={project.name}
                                        />
                                    </div>
                                    <div className="item-link-container">
                                        <span className='name-project'>{project.name}</span>
                                        <div className="icons-link-container">
                                            <a
                                                className="icon-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={project.liveLink}
                                            >
                                                <BsLink />
                                            </a>
                                            <a
                                                className="icon-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={project.sourceLink}
                                            >
                                                <AiFillGithub />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="proyect-item-description">
                                    <ul className="project-description-list">
                                        {project.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Project;