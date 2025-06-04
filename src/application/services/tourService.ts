import axios from 'axios';
import { CreateTourDto } from '../dto/createTour.dto';
import { UpdateTourDto } from '../dto/updateTour.dto';

const API_URL = '/api/tours';

export const tourService = {
  async getTours(params?: { keyword?: string; page?: number; limit?: number }) {
    const response = await axios.get(API_URL, { params });
    return response.data;
  },

  async getTourById(id: string) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  async createTour(data: CreateTourDto) {
    const response = await axios.post(API_URL, data);
    return response.data;
  },

  async updateTour(id: string, data: UpdateTourDto) {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  },

  async deleteTour(id: string) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }
};
