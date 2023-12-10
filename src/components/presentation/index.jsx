import React from 'react'
import imageMe from '../../assets/PhotoMe2.jpg';
import './styles.css';

const Presentation = () => {

    const redirectToAboutMe = () => {
        window.location.assign('/#aboutMe')
    };

    return (
        <div className="container-general" id='presentation'>
            <div className="image-me-container">
                <img src={imageMe} alt='me' className="image-me" />
            </div>
            <div className="introduccion-container">
                <span>Buenas! Mi nombre es </span>
                <strong style={{ fontSize: "40px", marginBottom: "10%" }}>Federica Rios</strong>
                <button
                    className="conoceme-button"
                    onClick={redirectToAboutMe}
                >
                    ¡Conoceme!
                </button>
            </div>
        </div>
    )
};

export default Presentation;