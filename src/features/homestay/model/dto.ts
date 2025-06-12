export interface Homestay {
  id: string;
  name: string;
  description: string;
  city: string;
  country: string;
  images: string[];
  pricePerNight: number;
  isFavorite: boolean;
}

export interface CreateHomestayDto extends Omit<Homestay, "id"> {}
export interface UpdateHomestayDto extends Partial<CreateHomestayDto> {}
export interface HomestaySearchQueryDto {
  city?: string;
  keyword?: string;
  maxPrice?: number;
}
