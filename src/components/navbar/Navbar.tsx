import logo from './../../assets/logo.png';
import './Navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-title-container'>
          <img src={logo} alt="SuperFarma Logo" className='navbar-logo' />
          <div className='navbar-title'>
            DrogaFarma
          </div>
        </div>

        <div className='navbar-menu'>
          <div className='navbar-item'>Produtos</div>
          <div className='navbar-item'>Categorias</div>
          <div className='navbar-item'>Cadastrar Tema</div>
          <div className='navbar-item'>Perfil</div>
          <div className='navbar-item'>Sair</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
