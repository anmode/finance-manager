import axios from "axios";

const API_URL = "http://localhost:3000";

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

export {
  register,
  login,
  createTransaction,
  getTransactions,
  createBudget,
  getBudgets,
};
