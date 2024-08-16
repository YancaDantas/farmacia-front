import React, { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner'; // Importa corretamente o componente Dna
import { Link } from 'react-router-dom';
import { Categorias } from '../../../models/Categorias'; // Corrija a importação se necessário
import Service from './../../../service/Service'; // Corrija o caminho se necessário

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categorias[]>([]); // Corrija o tipo se necessário
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCategorias() {
            try {
                const response = await Service.getAllCategorias();
                setCategorias(response.data);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                setError('Erro ao buscar categorias. Tente novamente.');
                console.error('Erro ao buscar categorias:', error);
            }
        }

        fetchCategorias();
    }, []);

    const deleteCategoria = async (id: number) => {
        try {
            await Service.deleteCategoria(id);
            setCategorias(categorias.filter(categoria => categoria.id !== id));
            alert('Categoria excluída com sucesso!');
        } catch (error: any) {
            setError('Erro ao excluir categoria. Tente novamente.');
            console.error('Erro ao excluir categoria:', error);
        }
    };

    return (
        <div className="container">
            <h2>Lista de Categorias</h2>
            <div className="link-wrapper">
                <Link to="/categoria-form" className="link">Criar Nova Categoria</Link>
            </div>
            {loading ? (
                <div className="dna-wrapper">
                    <DNA // Use o componente correto aqui
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                    />
                </div>
            ) : (
                <ul className="categoria-list">
                    {/* Exibe erro ou lista de categorias */}
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <>
                            {categorias.length > 0 ? (
                                categorias.map(categoria => (
                                    <li key={categoria.id} className="categoria-item">
                                        <p>{categoria.nome}</p>
                                        <div className="button-group">
                                            <Link to={`/categoria-form/${categoria.id}`} className="link edit-button">Editar</Link>
                                            <button onClick={() => deleteCategoria(categoria.id)} className="delete-button">Deletar</button>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p className="no-categories">Nenhuma categoria encontrada.</p>
                            )}
                        </>
                    )}
                </ul>
            )}
        </div>
    );
}

export default ListaCategorias;
