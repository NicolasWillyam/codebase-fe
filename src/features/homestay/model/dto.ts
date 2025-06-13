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

export type CreateHomestayBookingDto = {
  fullName: string;
  email: string;
  phone: string;
  homestayId: string;
  checkInDate: string; // format: YYYY-MM-DD
  checkOutDate: string; // format: YYYY-MM-DD
  numberOfGuests: number;
  note?: string;
  type?: "homestay";
};
