import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Services from '../../../service/Service';

const DeletarCategorias: React.FC = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const handleDelete = () => {
    Services.deleteCategoria(Number(id))
      .then(() => {
        alert('Categoria deletada com sucesso!');
        navigate('/categoria-listar'); 
      })
      .catch((error: any) => console.error('Erro ao deletar categoria:', error));
  };

  const handleCancel = () => {
    navigate('/categoria-listar'); 
  };

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Excluir Categoria</h1>
      <p className='text-center font-semibold mb-4'>Tem certeza de que deseja apagar a categoria?</p>
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-blue-400 text-white font-bold text-2xl'>Categoria</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>Categoria {id}</p>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={handleCancel}>Não</button>
          <button className='w-full text-slate-100 bg-blue-400 hover:bg-blue-600 flex items-center justify-center' onClick={handleDelete}>
            Sim
          </button>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default DeletarCategorias;