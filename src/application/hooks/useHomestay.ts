import { useQuery } from 'react-query';
import { homestayService } from '../services/homestayService';

export const useHomestays = () =>
  useQuery(['homestays'], homestayService.getAll);

export const useHomestayDetail = (id: string) =>
  useQuery(['homestay', id], () => homestayService.getById(id));
