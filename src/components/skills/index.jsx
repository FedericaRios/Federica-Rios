import React, { useEffect, useState } from "react";
import { DiJavascript, DiBitbucket } from "react-icons/di";
import { IoLogoHtml5, IoLogoCss3, IoLogoNpm, IoLogoNodejs } from "react-icons/io";
import { FaGitAlt, FaReact, FaPhp } from "react-icons/fa";
import { SiRedux, SiMysql } from "react-icons/si";
import Carousel from 'react-bootstrap/Carousel'
import materialUILogo from "../../assets/mui.png"
import apiRest from "../../assets/apiRest.png"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './styles.css';

const skills = [
    { icon: <DiJavascript className="item-skill logo-image" />, name: 'JavaScript', color: 'rgb(255, 238, 0)' },
    { icon: <IoLogoHtml5 className="item-skill logo-image" />, name: 'HTML', color: 'rgb(255, 102, 0)' },
    { icon: <IoLogoCss3 className="item-skill logo-image" />, name: 'CSS', color: 'rgb(0, 119, 255)' },
    { icon: <FaReact className="item-skill logo-image" />, name: 'React', color: 'rgb(0, 195, 255)' },
    { icon: <IoLogoNpm className="item-skill logo-image" />, name: 'Npm', color: 'red' },
    { icon: <SiRedux className="item-skill logo-image" />, name: 'Redux', color: 'blueviolet' },
    { icon: <IoLogoNodejs className="item-skill logo-image" />, name: 'Node', color: 'rgb(127, 201, 42)' },
    { icon: <h1 className="express-image item-skill logo-image" style={{ fontSize: "30px" }}>express</h1>, name: 'Express', color: '#dbbba6' },
    { icon: <FaPhp className="item-skill logo-image" />, name: 'PHP', color: '#777BB4' },
    { icon: <FaGitAlt className="item-skill logo-image" />, name: 'Git', color: 'rgb(255, 102, 0)' },
    { icon: <DiBitbucket className="item-skill logo-image" />, name: 'Bitbucket', color: '#0052CC' },
    { icon: <img className="logo-image" alt='MUI' src={materialUILogo} style={{ width: "110px", height: "105px" }} />, name: 'Material UI' },
    { icon: <img className="logo-image" alt='ApiRest' src={apiRest} style={{ width: "110px", height: "80px", marginBottom: "14px" }} />, name: 'API Rest' },
    { icon: <SiMysql className="item-skill logo-image" />, name: 'Workbench', color: '#0078c6' },
];

const Skills = ({ setActiveLink, activeLink }) => {
    const [skillsBySlide, setSkillsBySlide] = useState();

    useEffect(() => {
        if (activeLink) {
            setActiveLink('/home#skills')
        }
    }, [activeLink])

    useEffect(() => {
        const groupSkills = () => {
            const groupedSkills = [];
            for (let i = 0; i < skills.length; i += 8) {
                const group = skills.slice(i, i + 8);
                groupedSkills.push(group);
            }
            return groupedSkills;
        };

        setSkillsBySlide(groupSkills())
    }, [])

    return (
        <div className="skills-container" id="/home#skills">
            <Carousel
                className='skills-carrousel-container'
                nextIcon={<button className="buttons"><FiChevronRight /></button>}
                prevIcon={<button className="buttons"><FiChevronLeft /></button>}
            >
                {skillsBySlide?.map((arraySkills) => (
                    <Carousel.Item className='skills-carousel-item-container'>
                        <div className="skills-item-container">
                            {arraySkills?.map((skill) => (
                                <div className="skills-item" key={skill.name}>
                                    <div style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Skills;



