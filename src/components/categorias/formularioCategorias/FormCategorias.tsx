import React, { ChangeEvent, useEffect, useState } from 'react';
import Services from '../../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { Categorias } from '../../../models/Categorias'; 

const FormCategorias: React.FC = () => {
  const [categoria, setCategoria] = useState<Categorias>({ id: 0, nome: '' });
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
        Services.getCategoriaById(Number(id))
        .then((response: { data: any; }) => setCategoria(response.data))
        .catch((error: any) => console.error('Erro ao buscar categoria:', error));
    }
  }, [id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoria({ ...categoria, [name]: value });
  };

  const saveCategoria = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoria.id === 0) {
      Services.createCategoria(categoria)
        .then(() => {
          alert('Categoria criada com sucesso!');
          navigate('/categoria-listar');
        })
        .catch((error: any) => console.error('Erro ao criar categoria:', error));
    } else {
      Services.updateCategoria(categoria)
        .then(() => {
          alert('Categoria atualizada com sucesso!');
          navigate('/categoria-listar');
        })
        .catch((error: any) => console.error('Erro ao atualizar categoria:', error));
    }
  };

  return (
    <div className='container flex flex-col items-center justify-center mx-auto'>
      <h2 className='text-4xl text-center my-8'>
        {id ? 'Editar Categoria' : 'Criar Nova Categoria'}
      </h2>
      <form className='w-1/2 flex flex-col gap-4' onSubmit={saveCategoria}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='nome'>Nome da Categoria</label>
          <input
            type='text'
            name='nome'
            placeholder='Nome da Categoria'
            className='border-2 border-blue-400 rounded p-2'
            value={categoria.nome}
            onChange={handleInputChange}
          />
        </div>
        <button
          className='rounded text-slate-100 bg-blue-400 hover:bg-blue-800 w-1/2 py-2 mx-auto block' 
          type='submit'
        >
          {id ? 'Atualizar' : 'Criar'}
        </button>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </form>
    </div>
  );
}

export default FormCategorias;