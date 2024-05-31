import axios from "axios";

const API_URL = "http://localhost:8000";

const register = (email, password) => {
  return axios.post(`${API_URL}/auth/register`, { email, password });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

const createTransaction = (token, transaction) => {
  return axios.post(`${API_URL}/transactions`, transaction, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getTransactions = (token) => {
  return axios.get(`${API_URL}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const createBudget = (token, budget) => {
  return axios.post(`${API_URL}/budgets`, budget, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getBudgets = (token) => {
  return axios.get(`${API_URL}/budgets`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getCategories = (token) => {  
  return axios.get(`${API_URL}/categories`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteCategory = (token, id) => { 
  return axios.delete(`${API_URL}/categories/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const createCategory = (token, category) => {
  return axios.post(`${API_URL}/categories`, category, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getCategoryById = (token, id) => { 
  return axios.get(`${API_URL}/categories/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};


export {
  register,
  login,
  createTransaction,
  getTransactions,
  createBudget,
  getBudgets,
  getCategories,
  deleteCategory,
  createCategory,
  getCategoryById,
};
