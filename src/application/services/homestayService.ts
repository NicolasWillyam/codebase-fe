import httpClient from '@/infrastructure/api/httpClient';
import { Homestay } from '@/domain/entities/Homestay';

export const homestayService = {
  getAll: () => httpClient.get<Homestay[]>('/homestays'),
  getById: (id: string) => httpClient.get<Homestay>(`/homestays/${id}`),
  book: (data: { homestayId: string, checkIn: string, checkOut: string }) =>
    httpClient.post('/bookings', data),
};