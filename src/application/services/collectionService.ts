import axios from 'axios';

export const collectionService = {
  getAll: async () => {
    const response = await axios.get('/api/collections');
    return response.data;
  },
};
