import axios from './axiosInstance';

export const getProducts = () => axios.get('/products');
export const getProduct = (id) => axios.get(`/products/${id}`);
