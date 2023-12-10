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
    { icon: <DiJavascript className="item-skill" />, name: 'JavaScript', color: 'rgb(255, 217, 0)' },
    { icon: <IoLogoHtml5 className="item-skill" />, name: 'HTML', color: 'rgb(255, 102, 0)' },
    { icon: <IoLogoCss3 className="item-skill" />, name: 'CSS', color: 'rgb(0, 119, 255)' },
    { icon: <FaReact className="item-skill" />, name: 'React', color: 'rgb(0, 195, 255)' },
    { icon: <IoLogoNpm className="item-skill" />, name: 'Npm', color: 'red' },
    { icon: <SiRedux className="item-skill" />, name: 'Redux', color: 'blueviolet' },
    { icon: <IoLogoNodejs className="item-skill" />, name: 'Node', color: 'rgb(127, 201, 42)' },
    { icon: <h1 className="express-image item-skill" style={{ fontSize: "20px" }}>express</h1>, name: 'Express', color: 'rgba(255, 255, 255, 0.685)' },
    { icon: <FaPhp className="item-skill" />, name: 'PHP', color: '#777BB4' },
    { icon: <FaGitAlt className="item-skill" />, name: 'Git', color: 'rgb(255, 102, 0)' },
    { icon: <DiBitbucket className="item-skill" />, name: 'Bitbucket', color: '#0052CC' },
    { icon: <img className="image-mui-skill" alt='MUI' src={materialUILogo} />, name: 'Material UI' },
    { icon: <img className="image-apirest-skill" alt='ApiRest' src={apiRest} />, name: 'API Rest' },
    { icon: <SiMysql className="item-skill" />, name: 'Workbench', color: '#0078c6' },
];

const Skills = () => {
    const [skillsBySlide, setSkillsBySlide] = useState();
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
        <div className="skills-container" id="skills">
            <Carousel
                indicators={true}
                className='skills-carrousel-container'
                interval={null}
                nextIcon={isMobile ? false : <button className="buttons"><FiChevronRight /></button>}
                prevIcon={isMobile ? false : <button className="buttons"><FiChevronLeft /></button>}
            >
                {skillsBySlide?.map((arraySkills, index) => (
                    <Carousel.Item className='skills-carousel-item-container' key={index}>
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



