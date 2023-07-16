import React from 'react'
import toDos from '../../assets/todos.png';
import Clima from '../../assets/clima.png'
import Pokemon from '../../assets/pokemon.png'
import Carousel from 'react-bootstrap/Carousel'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsLink } from "react-icons/bs";
import './styles.css';

const Project = () => {

    return (
        <div className="container" id='projects'>
            <Carousel
                className='carrousel-container'
                nextIcon={<button className="buttons"><FiChevronRight /></button>}
                prevIcon={<button className="buttons"><FiChevronLeft /></button>}
            >
                <Carousel.Item className='carousel-item-container'>
                    <div className="project-container">
                        <div className="project-item-container">
                            <div className="project-item-show">
                                <div className="img-item-container">
                                    <img
                                        className="item-img"
                                        src={toDos}
                                        alt="ToDos"
                                    ></img>
                                </div>
                                <div className="item-link-container">
                                    <span className='name-project'>ToDos App</span>
                                    <a
                                        className="icon-link"
                                        href="https://federicarios.github.io/proyecto-TODOs/">
                                        <BsLink />
                                    </a>
                                </div>
                            </div>
                            <div className="proyect-item-description">
                                <ul className="project-description-list">
                                    <li>Permite gestionar las actividades diarias.</li>
                                    <li>La desarrollé junto al curso de React en Platzi, utilizando las tecnologías de React, JavasCript,
                                        Html, Css, y aplicando Responsive Design (disponible en mobile/celular y desktop).</li>
                                    <li>Para hacer deploy/publicarlo utilicé GitHub-pages.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className='carousel-item-container'>
                    <div className="project-container">
                        <div className="project-item-container">
                            <div className="project-item-show">
                                <div className="img-item-container">
                                    <img
                                        className="item-img"
                                        src={Clima}
                                        alt="Clima"
                                    ></img>
                                </div>
                                <div className="item-link-container">
                                    <span className='name-project'>Wheater App</span>
                                    <a
                                        className="icon-link"
                                        href='https://federicarios.github.io/proyecto-clima'>
                                        <BsLink />
                                    </a>
                                </div>
                            </div>
                            <div className="proyect-item-description">
                                <ul className="project-description-list">
                                    <li>Permite consultar el pronóstico del tiempo para diversas ciudades.</li>
                                    <li>La desarrollé utilizando las tecnologías de React, JavasCript, Html, Css y aplicando Responsive Design.</li>
                                    <li>Para obtener los datos del pronóstico, consumí una API externa garantizando la precisión y actualidad de la información.</li>
                                    <li>La app se encuentra deployada en GitHub-pages.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className='carousel-item-container'>
                    <div className="project-container">
                        <div className="project-item-container">
                            <div className="project-item-show">
                                <div className="img-item-container">
                                    <img
                                        className="item-img"
                                        src={Pokemon}
                                        alt="Pokemon"
                                    ></img>
                                </div>
                                <div className="item-link-container">
                                    <span className='name-project'>Pokemon App</span>
                                    <a
                                        className="icon-link"
                                        href='https://federicarios.github.io/challenge-pokemon/'>
                                        <BsLink />
                                    </a>
                                </div>
                            </div>
                            <div className="proyect-item-description">
                                <ul className="project-description-list">
                                    <li>Permite buscar y conocer información sobre cualquier Pokémon como por ejemplo, sus habilidades.</li>
                                    <li>Las tecnologías utilizadas fueron React, JavasCript, Html, Css, y Responsive Design.</li>
                                    <li>Gracias a la integración de una API, la aplicación proporciona datos precisos y actualizados.</li>
                                    <li>La app se encuentra deployada en GitHub-pages.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default Project;