import React from 'react';
import headerDesktop from '../assets/header-background2.png';
import headerTablet from '../assets/header-background2.png';
import headerMobile from '../assets/header-background.png';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="app-header">
      {/* Container para o banner */}
      <div className="banner-container">
        <picture>
          <source media="(min-width: 1200px)" srcSet={headerDesktop} />
          <source media="(min-width: 768px)" srcSet={headerTablet} />
          <img 
            src={headerMobile} 
            alt="Ponto On Bar Grill" 
            className="header-image"
            loading="lazy"
          />
        </picture>
      </div>
      
      {/* Logo centralizada abaixo do banner */}
      <div className="logo-container">
        <img 
          src={logo} 
          alt="Ponto On Bar Grill - Logo" 
          className="header-logo"
          loading="lazy"
        />
        
      </div>
      <div>
      <h1 class="titulo">Ponto On Bar Grill</h1>
      <p class="subtexto">Cardápio</p>
      </div>
    </header>
  );
};

export default Header;