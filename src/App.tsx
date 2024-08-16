import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './paginas/home/Home';
import  ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormCategorias from './components/categorias/formularioCategorias/FormCategorias';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';
import Categoria from './paginas/categoria/Categoria';
import Produtos from './paginas/produtos/Produtos';
import FaleConosco from './paginas/faleconosco/FaleConosco';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria-listar" element={<ListaCategorias />} />
            <Route path="/categoria-form" element={<FormCategorias />} />
            <Route path="/categoria-form/:id" element={<FormCategorias />} />
            <Route path="/categoria-deletar/:id" element={<DeletarCategorias />} />
            <Route path="/produto" element={<Produtos />} />
            <Route path="/contato" element={<FaleConosco />} />
            <Route path="/categoria" element={<Categoria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;