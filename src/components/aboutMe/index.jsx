import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineIdcard } from "react-icons/ai";
import perfil from '../../assets/perfil-transformed.png';
import './styles.css';

const AboutMe = () => {

    return (
        <div className="about-me-container" id="aboutMe">
            <div className="image-container">
                <img className="image" src={perfil} alt="Perfil" />
            </div>
            <div className="about-me-presentation">
                <h1 className="about-me">Sobre mí</h1>
                <h3>
                    Me encanta el mundo de la programación, por preferencia me inclino más al front-end pero también he tenido la
                    oportunidad de programar proyectos en back-end.
                    Me encuentro en constante aprendizaje de nuevas tecnologías y tendencias del desarrollo de software.
                    Además de mi pasión por la programación, valoro la colaboración y el trabajo en equipo. Me encanta
                    participar en proyectos conjuntos donde puedo aportar mi conocimiento y aprender de los demás.
                </h3>
                <h3>
                    Fuera del ámbito laboral, disfruto explorar la belleza de la naturaleza para desconectar y recargar
                    energías. Además, considero muy importante una constancia en el ejercicio físico y la lectura de libros
                    que aporten distintos conocimientos para la vida.
                </h3>
                <div className="about-me-pages-container">
                    <a
                        href="https://github.com/FedericaRios"
                        className="about-me-pages"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub />
                        <h1 className="hover-text">GitHub</h1>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/federica-rios-bb9ab4197/"
                        className="about-me-pages"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillLinkedin />
                        <h1 className="hover-text">Linkedin</h1>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1Sh2Ze2aTRtjOsIabq9vOU4vKXfxVYlU5/view?usp=sharing"
                        className="about-me-pages about-me-pages-cv"
                        download
                    >
                        <AiOutlineIdcard />
                        <h1 className="hover-text">CV</h1>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
