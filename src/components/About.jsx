import React from "react";
import './About.css';
import danielleImage from '../assets/danielle.png';
import wave from '../assets/waves.svg'; 


function About() {
    return(
        <section className="about">
        <h1>Sobre mim</h1>
        <div className="description">
        <div className="wave"> <img src={wave} alt="sobremim-wave"/> 
            </div>
          <p>
            Nascida em Recife, Danielle Gomes é uma artesã apaixonada por brinquedos
            educativos e fascinada por acompanhar o desenvolvimento de pessoas no processo
            de aprendizagem.
          </p>
          <div className="image-container">
            <img src={danielleImage} alt="Danielle Gomes" className="profile-image" />
          </div>
        </div>
      </section>

    );
}

export default About;