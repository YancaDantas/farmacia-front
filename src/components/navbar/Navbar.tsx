import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title-container">
          <Link to="/">
            <img src={logo} alt="DrogaFarma Logo" className="navbar-logo" />
          </Link>
          <div className="navbar-title">
            DrogaFarma
          </div>
        </div>
        <ul className="nav-links">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/produto">Produtos</Link></li>
          <li className="navbar-item"><Link to="/categoria">Categorias</Link></li>
          <li className="navbar-item"><Link to="/contato">Fale conosco</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
