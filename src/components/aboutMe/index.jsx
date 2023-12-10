import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineIdcard } from "react-icons/ai";
import logoMe from '../../assets/logoMe.png';
import './styles.css';

const AboutMe = () => {

    return (
        <div className="about-me-container" id="aboutMe">
            <div className="image-container">
                <img src={logoMe} alt='Perfil' className="image" />
            </div>
            <div className="about-me-presentation-container">
                <div className="about-me-title">
                    <div className="line-title"></div>
                    <h4 style={{ fontSize: '26px', margin: '5px 15px 5px' }}>Sobre mí</h4>
                    <div className="line-title"></div>
                </div>
                <h3>
                    Me encanta el mundo de la programación, soy desarrolladora full stack con preferencia hacia front-end. Valoro la
                    colaboración y el trabajo en equipo, me encanta participar en proyectos conjuntos donde puedo aportar mi conocimiento
                    y aprender de los demás. <br />
                    <br />
                    En mi día a día disfruto explorar la belleza de la naturaleza para desconectar y recargar energías, hacer ejercicio físico
                    y leer libros que aporten distintos conocimientos para la vida.
                </h3>
                <div className="about-me-pages-container">
                    <a
                        href="https://github.com/FedericaRios"
                        className="about-me-pages"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/federica-rios-bb9ab4197/"
                        className="about-me-pages"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1MIIDJ2ByjxeP42wCjj7cPBcm1HlUwvt_/view"
                        className="about-me-pages about-me-pages-cv"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineIdcard />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
