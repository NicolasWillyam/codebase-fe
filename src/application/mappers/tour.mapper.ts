import { TourDetailDto } from '../dto/tour-detail.dto';
import { TourListItemDto } from '../dto/tour-list-item.dto';

export function mapTourListResponse(data: any): TourListItemDto[] {
  return data.map((item: any) => ({
    id: item.id,
    name: item.name,
    thumbnail: item.thumbnail,
    shortDescription: item.shortDescription,
    price: item.price,
  }));
}

export function mapTourDetailResponse(data: any): TourDetailDto {
  return {
    id: data.id,
    name: data.name,
    thumbnail: data.thumbnail,
    shortDescription: data.shortDescription,
    fullDescription: data.fullDescription,
    schedule: data.schedule,
    services: data.services,
    price: data.price,
  };
}
