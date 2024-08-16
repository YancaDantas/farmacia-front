import React from 'react';
import './Home.css';
import home from './../../assets/farmaceutica.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Adicionando a imagem entre o Navbar e o conteúdo principal */}
      <div className="banner-container">
        <img 
          src={home}
          alt="Banner"
          className="home-banner"
        />
        <div className="text-overlay">
          <h1>Seja bem vindo!</h1>
          <p>A  melhor farmácia na palma da sua mão!</p>
          <button className="product-button" onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Produtos
          </button>
        </div>
      </div>
      <div id="products-section" className="products-container">
        <h2>Todos Produtos</h2>
      </div>
    </div>
  );
}

export default Home;