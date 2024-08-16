import React from 'react';
import './Footer.css'; // Importe o CSS do componente

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p className="text">DrogaFarma | Copyright: Yanca Dantas</p>
        <p className="subtext"></p>
        <div className="social-links">
          {/* Adicione ícones ou links aqui, se necessário */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
