import axios from 'axios';

export const productService = {
  getAll: async () => {
    const response = await axios.get('/api/products');
    return response.data;
  },
};
