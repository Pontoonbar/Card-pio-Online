import React from 'react';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px',
      backgroundColor: 'black',
      color: 'white'
    }}>

      <div className="logo-container-footer">
        <img
          src={logo}
          alt="Ponto On Bar Grill - Logo"
          className="footer-logo"
          loading="lazy"
        />
      </div>
      <div class="titulo-footer"> 
        <h1 className="subtitulo-footer">
          Ponto On Bar Grill
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
            <a href="https://www.instagram.com/pontoonbargrill/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093230853708" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <FaFacebook size={24} />
            </a>
            <a href="https://wa.me/5511932764477?text=Ol%C3%A1!%20Vim%20pelo%20card%C3%A1pio%2C%20poderia%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <FaWhatsapp size={24} />
            </a>
          </div>
        </h1>
        
      </div>
      <div class="subtitulo">
      <a href="politica-privacidade.html">Politicas de privacidade</a>
      </div>

      <p>© {new Date().getFullYear()} Ponto On Bar Grill</p>
      <a href="incodet.com" class="desenvolvimento">Desenvolvido por Incodet - Criação de sites</a>
    </footer>
  );
};

export default Footer;