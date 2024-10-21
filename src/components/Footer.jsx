import React from "react";
import "./Footer.css";
import fantoche1 from "../assets/fantoche1.png";
import fantoche2 from "../assets/fantoche2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Brinquedos educativos artesanais e sustentáveis</h4>
          <button className="contact-button">Fale conosco</button>
          <p>Respondemos em até x tempo</p>
        </div>
        <div className="footer-section">
          <div className="ftc">
          <img src={fantoche1} alt="Fantoche 1" className="footer-imagem1" />
          <img src={fantoche2} alt="Fantoche 2" className="footer-imagem2" />
        </div>
        </div>
        <div className="footer-section">
          <h3>Nos encontre em</h3>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
        <div className="footer-section">
          <h3>Feito por</h3>
            <p>Ana Rita</p>
            <p>Camila</p>
            <p>Danilo</p>
            <p>Hadassa</p>
            <p>Leonardo</p>
            <p>Matheus</p> 
        </div>
        <div className="footer-section">
          <h3>Apoio</h3>
          <p>Softex</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
