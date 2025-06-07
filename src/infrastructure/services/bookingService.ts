import { Booking, BookingFormData, Tour } from '../../domain/types/booking';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Thay đổi URL này theo backend của bạn

export const bookingService = {
  async getTours(): Promise<Tour[]> {
    const response = await axios.get(`${API_URL}/tours`);
    return response.data;
  },

  async getTourById(id: string): Promise<Tour> {
    const response = await axios.get(`${API_URL}/tours/${id}`);
    return response.data;
  },

  async createBooking(bookingData: BookingFormData): Promise<Booking> {
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data;
  },

  async getBookings(): Promise<Booking[]> {
    const response = await axios.get(`${API_URL}/bookings`);
    return response.data;
  },

  async cancelBooking(bookingId: string): Promise<Booking> {
    const response = await axios.patch(`${API_URL}/bookings/${bookingId}/cancel`);
    return response.data;
  }
}; 