import React from 'react';
import './FaleConosco.css';

const FaleConosco: React.FC = () => {
  return (
    <div className="contato-container">
      <h1>Fale Conosco</h1>
      <p>Deixe sua dúvida que te retornaremos.</p>
      <form className="contato-form">
        <label>
          Nome:
          <input type="text" placeholder="Seu nome" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Seu email" />
        </label>
        <label>
          Mensagem:
          <textarea placeholder="Sua mensagem"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FaleConosco;