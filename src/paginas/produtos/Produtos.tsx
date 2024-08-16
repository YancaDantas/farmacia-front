import React from 'react';
import './Produtos.css';

const Produtos: React.FC = () => {
  return (
    <div className="produto-container">
      <h1>Nossos Produtos</h1>
      <div className="produto-list">
        <div className="produto-item">
          <h2>Medicamento em Gotas</h2>
          <p>Descrição do produto.</p>
        </div>
        <div className="produto-item">
          <h2>Medicamentos em Comprimidos</h2>
          <p>Descrição do produto.</p>
        </div>
      </div>
    </div>
  );
}

export default Produtos;