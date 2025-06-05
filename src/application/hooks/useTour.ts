import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { tourService } from '../services/tourService';
import { CreateTourDto } from '../dto/createTour.dto';
import { UpdateTourDto } from '../dto/updateTour.dto';

export function useTours(params?: { keyword?: string; page?: number; limit?: number }) {
  return useQuery(['tours', params], () => tourService.getTours(params));
}

export function useTour(id: string) {
  return useQuery(['tour', id], () => tourService.getTourById(id), { enabled: !!id });
}

export function useCreateTour() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTourDto) => tourService.createTour(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['tours']);
    },
  });
}

export function useUpdateTour(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateTourDto) => tourService.updateTour(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['tours']);
      queryClient.invalidateQueries(['tour', id]);
    },
  });
}

export function useDeleteTour() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => tourService.deleteTour(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['tours']);
    },
  });
}
