import React from 'react';
import './Home.css'; // Importe o CSS do componente
import imagem from './../../assets/farmaceutica.jpg';

function Home() {
  return (
    <div className="bg-blue-600 flex justify-center py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 text-white max-w-5xl mx-auto px-4 relative">
        {/* Texto à direita */}
        <div className="flex flex-col gap-6 items-start justify-center py-4 text-right text-large">
          <h2 className="text-5xl md:text-6xl font-extrabold">Seja bem-vindo!</h2>
          <p className="text-lg md:text-xl">Uma farmácia na palma da sua mão!</p>
          <p className="text-lg md:text-xl">Seu remédio em um click.</p>
          <div className="flex justify-start">
            <button className="button-primary">Ver produtos</button>
          </div>
        </div>
        {/* Imagem à esquerda */}
        <div className="flex justify-center items-center">
          <img src={imagem} alt="Imagem da farmácia" className="image image-left" />
        </div>
      </div>
    </div>
  );
}

export default Home;
