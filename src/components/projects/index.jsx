import React, { useEffect } from 'react'
import toDos from '../../assets/todos.png';
import Clima from '../../assets/clima.png'
import Pokemon from '../../assets/pokemon.png'
import Carousel from 'react-bootstrap/Carousel'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './styles.css';

const Project = ({ setActiveLink, activeLink }) => {

    useEffect(() => {
        if (activeLink) {
            setActiveLink('/home#projects')
        }
    }, [activeLink])

    return (
        <div className="container" id='/home#projects'>
            <Carousel
                className='carrousel-container'
                nextIcon={<button className="buttons"><FiChevronRight /></button>}
                prevIcon={<button className="buttons"><FiChevronLeft /></button>}
            >
                <Carousel.Item className='carousel-item-container'>
                    <div className="project-item-container">
                        <div className="project-item-img-container">
                            <img
                                className="project-item-img"
                                src={toDos}
                                onClick={() => window.open('https://federicarios.github.io/proyecto-TODOs/')}
                                alt="ToDos"
                            ></img>
                        </div>
                        <div className="proyect-item-description">
                            <h1>ToDos App</h1>
                            <h3>
                                Permite gestionar actividades diarias, la desarrollé junto al curso de React en Platzi.
                                Utilicé las tecnologías de React, JavasCript, Html, Css,
                                y Responsive Design por lo cual está disponible en mobile/celular y desktop.
                                Por último, para hacer deploy/publicarlo utilicé GitHub-pages.
                            </h3>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className='carousel-item-container'>
                    <div className="project-item-container">
                        <div className="project-item-img-container">
                            <img
                                className="project-item-img"
                                src={Clima}
                                onClick={() => window.open('https://federicarios.github.io/proyecto-clima')}
                                alt="Clima"
                            ></img>
                        </div>
                        <div className="proyect-item-description">
                            <h1>Wheater App</h1>
                            <h3>
                                Permite consultar el pronóstico de ciudades. La desarrollé
                                consumiendo una Api, utilizando las tecnologías de React, JavasCript,
                                Html, Css, y aplicando Responsive Design.
                                Por último, realicé deploy con GitHub-pages.
                            </h3>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className='carousel-item-container'>
                    <div className="project-item-container">
                        <div className="project-item-img-container">
                            <img
                                className="project-item-img"
                                src={Pokemon}
                                onClick={() => window.open('https://federicarios.github.io/challenge-pokemon/')}
                                alt="Pokemon"
                            ></img>
                        </div>
                        <div className="proyect-item-description">
                            <h1>Pokemon App</h1>
                            <h3>
                                Brinda información sobre el pokemon que se desee buscar, gracias al consumo de
                                una Api. Las tecnologías utilizadas fueron React, JavasCript, Html, Css,
                                y Responsive Design.
                                La app se encuentra deployada con GitHub-pages.
                            </h3>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default Project;