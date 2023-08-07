import React from 'react'
import { SiWhatsapp } from "react-icons/si";
import { RiMailLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import './styles.css';

const Contact = () => {
    return (
        <div className="contact-container-general" id='contact'>
            <div className="contact-container">
                <span className="items-container"><SiWhatsapp className="iconos" /> 637051193</span>
                <span
                    className="items-container enlace-in"
                    onClick={() => window.open('https://www.linkedin.com/in/federica-rios-bb9ab4197/')}
                >
                    <AiFillLinkedin className="linkedin-icon" /> https://www.linkedin.com/in/federica-rios-bb9ab4197/
                </span>
                <span className="items-container"><RiMailLine className="iconos" /> rojofederica21@gmail.com</span>
            </div>
        </div>
    )
};

export default Contact;