import axios from 'axios';

const API_URL = 'http://localhost:8080/categoria';

class Service {
  
  getAllCategorias() {
    return axios.get(API_URL);
  }

  
  getCategoriaById(id: number) {
    return axios.get(`${API_URL}/${id}`);
  }

  
  createCategoria(categoria: { nome: string }) {
    return axios.post(API_URL, categoria);
  }

  
  updateCategoria(categoria: { id: number; nome: string }) {
    return axios.put(API_URL, categoria);
  }


  deleteCategoria(id: number) {
    return axios.delete(`${API_URL}/${id}`);
  }

  
  getCategoriaByNome(nome: string) {
    return axios.get(`${API_URL}/nome/${nome}`);
  }
}

export default new Service();