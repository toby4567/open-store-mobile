import axios from 'axios';

const API = 'https://fakestoreapi.com';

export const getCategories = async () => {
  const res = await axios.get(`${API}/products/categories`);
  return res.data;
};

export const getProductsByCategory = async (category) => {
  const res = await axios.get(`${API}/products/category/${category}`);
  return res.data;
};

export const getProduct = async (id) => {
  const res = await axios.get(`${API}/products/${id}`);
  return res.data;
};