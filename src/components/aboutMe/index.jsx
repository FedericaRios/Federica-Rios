import React, { useState, useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineIdcard } from "react-icons/ai";
import photoMe1 from '../../assets/PhotoMe1.jpg';
import photoMe2 from '../../assets/PhotoMe2.jpg';

import './styles.css';

const AboutMe = () => {
    const [currentImage, setCurrentImage] = useState(photoMe1);
    const photos = [photoMe1, photoMe2];
    const interval = 1500;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const nextIndex = (photos.indexOf(currentImage) + 1) % photos.length;
            setCurrentImage(photos[nextIndex]);
        }, interval);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentImage, photos.length, interval])

    const imageStyles = {
        width: {
            image1: '290px',
            image2: '270px',
        },
        height: {
            image1: '270px',
            image2: '270px',
        },
    };

    return (
        <div className="about-me-container" id="aboutMe">
            <div className="image-container">
                <img
                    className="image"
                    src={currentImage}
                    alt="Perfil"
                    style={{
                        width: imageStyles.width[`image${photos.indexOf(currentImage) + 1}`],
                        height: imageStyles.height[`image${photos.indexOf(currentImage) + 1}`],
                    }} />
            </div>
            <div className="about-me-presentation-container">
                <h1 style={{ fontSize: '20px' }}>Sobre mí</h1>
                <h3>
                    Me encanta el mundo de la programación, soy desarrolladora full stack con preferencia hacia front-end,
                    pero también he tenido la oportunidad de programar en back-end. Valoro la colaboración y el trabajo en equipo,
                    me encanta participar en proyectos conjuntos donde puedo aportar mi conocimiento y aprender de los demás.
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
