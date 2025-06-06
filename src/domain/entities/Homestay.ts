export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  amenities: string[];
}

export interface Homestay {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  amenities: string[];
  images: string[];
  location: string;
  rooms: Room[];
  createdAt: string;
}
