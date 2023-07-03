import React, { useState } from 'react'
import Nav from '../../components/nav'
import AboutMe from '../../components/aboutMe'
import Skills from '../../components/skills'
import Projects from '../../components/projects'
import Contact from '../../components/contact'
import './styles.css';

const Home = () => {
    const [activeLink, setActiveLink] = useState('');

    return (
        <div className='home-container'>
            <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
            <AboutMe activeLink={activeLink} setActiveLink={setActiveLink} />
            <Skills activeLink={activeLink} setActiveLink={setActiveLink} />
            <Projects activeLink={activeLink} setActiveLink={setActiveLink} />
            <Contact activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
    )
}

export default Home;