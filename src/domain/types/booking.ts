export interface Tour {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  maxGroupSize: number;
  startDate: string;
  endDate: string;
  location: string;
  imageUrl: string;
}

export interface Booking {
  id: string;
  tourId: string;
  userId: string;
  numberOfPeople: number;
  totalPrice: number;
  bookingDate: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  specialRequests?: string;
}

export interface BookingFormData {
  tourId: string;
  numberOfPeople: number;
  specialRequests?: string;
} 