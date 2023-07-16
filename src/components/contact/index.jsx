import React from 'react'
import { SiWhatsapp } from "react-icons/si";
import { RiMailLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import './styles.css';

const Contact = () => {

    return (
        <div className="contact-container" id='contact'>
            <div className="contacts-container">
                <span><SiWhatsapp className="iconos" /> 637051193</span>
                <span onClick={() => window.open('https://www.linkedin.com/in/federica-rios-bb9ab4197/')}
                    className="enlace-in"><AiFillLinkedin className="iconos" /> https://www.linkedin.com/in/federica-rios-bb9ab4197/</span>
                <span><RiMailLine className="iconos" /> rojofederica21@gmail.com</span>
            </div>
        </div>
    )
};

export default Contact;