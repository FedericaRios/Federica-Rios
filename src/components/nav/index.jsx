// import React, { useState } from 'react'
// import './styles.css';

// const Nav = ({ setActiveLink, activeLink }) => {
//     // const [activeLink, setActiveLink] = useState('');

//     const handleLinkClick = (link) => {
//         const hash = window.location.hash;
//         setActiveLink(link);
//     };

//     return (
//         <div className="nav-container">
//             <nav className="nav-menu">
//                 <h1 className={`nav-menu-text ${activeLink === 'aboutMe' || activeLink === '/home#aboutMe' ? 'active-link' : ''}`}>
//                     <a href="#/home#aboutMe" onClick={() => handleLinkClick('aboutMe')}>About Me</a></h1>
//                 <h1 className={`nav-menu-text ${activeLink === 'skills' ? 'active-link' : ''}`}>
//                     <a href="#/home#skills" onClick={() => handleLinkClick('skills')}>Skills</a></h1>
//                 <h1 className={`nav-menu-text ${activeLink === 'projects' ? 'active-link' : ''}`}>
//                     <a href="#/home#projects" onClick={() => handleLinkClick('projects')}>Projects</a></h1>
//                 <h1 className={`nav-menu-text ${activeLink === 'contact' ? 'active-link' : ''}`}>
//                     <a href="#/home#contact" onClick={() => handleLinkClick('contact')}>Contact</a></h1>
//             </nav>
//         </div>
//     )
// };

// export default Nav;