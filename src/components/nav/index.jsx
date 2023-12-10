import React, { useState, useEffect } from 'react';
import './styles.css';

const Nav = ({ activeSection, setActiveSection }) => {
    const [scrollEventActive, setScrollEventActive] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollEventActive) {
                const sectionIds = ['presentation', 'aboutMe', 'skills', 'projects', 'contact'];
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                let currentSection = '';

                sectionIds.forEach((sectionId) => {
                    const section = document.getElementById(sectionId);

                    if (section) {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.offsetHeight;

                        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                            currentSection = sectionId;
                        }
                    }
                });
                setActiveSection(currentSection);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollEventActive]);

    const handleLinkClick = (link) => {
        setScrollEventActive(false); // Desactivar el evento scroll temporalmente
        setActiveSection(link);

        const section = document.getElementById(link);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
            setScrollEventActive(true);
        }, 1000);
    };

    return (
        <div className="nav-container">
            <nav className="nav-menu">
                <h1 className={`nav-menu-text ${activeSection === 'presentation' ? 'active-link' : ''}`}>
                    <a href="#/#presentation" onClick={() => handleLinkClick('presentation')}>
                        Presentation
                    </a>
                </h1>
                <h1 className={`nav-menu-text ${activeSection === 'aboutMe' ? 'active-link' : ''}`}>
                    <a href="#/#aboutMe" onClick={() => handleLinkClick('aboutMe')}>
                        About Me
                    </a>
                </h1>
                <h1 className={`nav-menu-text ${activeSection === 'skills' ? 'active-link' : ''}`}>
                    <a href="#/#skills" onClick={() => handleLinkClick('skills')}>
                        Skills
                    </a>
                </h1>
                <h1 className={`nav-menu-text ${activeSection === 'projects' ? 'active-link' : ''}`}>
                    <a href="#/#projects" onClick={() => handleLinkClick('projects')}>
                        Projects
                    </a>
                </h1>
                <h1 className={`nav-menu-text ${activeSection === 'contact' ? 'active-link' : ''}`}>
                    <a href="#/#contact" onClick={() => handleLinkClick('contact')}>
                        Contact
                    </a>
                </h1>
            </nav>
        </div>
    );
};

export default Nav;