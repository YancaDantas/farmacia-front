import React from 'react';
import './Categoria.css';

const Categoria: React.FC = () => {
  return (
    <div className="categoria-container">
      <h1>Categorias</h1>
      <div className="categoria-list">
        <div className="categoria-item">
          <h2>Medicamentos Controlados</h2>
        </div>
        <div className="categoria-item">
          <h2>Farmácia Popular</h2>
        </div>
        <div className="categoria-item">
          <h2>Cosméticos</h2>
        </div>
      </div>
    </div>
  );
}

export default Categoria;