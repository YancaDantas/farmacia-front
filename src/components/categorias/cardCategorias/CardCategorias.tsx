import React from 'react';
import { Link } from 'react-router-dom';
import { Categorias } from './../../../models/Categorias';

interface Props {
  categorias: Categorias;
}

const CardCategoria: React.FC<Props> = ({ categorias }) => {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-blue-400 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.nome}</p>
      <div className="flex">
        <Link to={`/categoria-form/${categorias.id}`} className='w-full text-slate-100 bg-blue-800 hover:bg-green-400 flex items-center justify-center py-2'>
          Editar
        </Link>
        <Link to={`/deletarCategoria/${categorias.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;