import React, { useState } from 'react';
import Nav from '../../components/nav';
import Presentation from '../../components/presentation';
import AboutMe from '../../components/aboutMe';
import Skills from '../../components/skills';
import Projects from '../../components/projects';
import Contact from '../../components/contact';
import './styles.css';

const Home = () => {
    const [activeSection, setActiveSection] = useState('aboutMe');

    return (
        <div className='home-container'>
            <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
            <Presentation />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
};

export default Home;