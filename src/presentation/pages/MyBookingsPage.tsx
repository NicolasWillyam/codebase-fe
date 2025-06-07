import React, { useState, useEffect } from 'react';
import { Booking, Tour } from '../../domain/types/booking';
import { bookingService } from '../../infrastructure/services/bookingService';

export const MyBookingsPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tours, setTours] = useState<Record<string, Tour>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingsData = await bookingService.getBookings();
        setBookings(bookingsData);

        // Fetch tour details for each booking
        const tourDetails: Record<string, Tour> = {};
        for (const booking of bookingsData) {
          if (!tourDetails[booking.tourId]) {
            const tour = await bookingService.getTourById(booking.tourId);
            tourDetails[booking.tourId] = tour;
          }
        }
        setTours(tourDetails);
      } catch (err) {
        setError('Failed to load bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCancelBooking = async (bookingId: string) => {
    try {
      await bookingService.cancelBooking(bookingId);
      setBookings(bookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'CANCELLED' }
          : booking
      ));
    } catch (err) {
      setError('Failed to cancel booking');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      <div className="space-y-4">
        {bookings.map((booking) => {
          const tour = tours[booking.tourId];
          return (
            <div key={booking.id} className="border rounded-lg p-4 shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{tour?.name}</h2>
                  <p className="text-gray-600">{tour?.location}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                  booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {booking.status}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Number of People</p>
                  <p className="font-semibold">{booking.numberOfPeople}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Price</p>
                  <p className="font-semibold">${booking.totalPrice}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Booking Date</p>
                  <p className="font-semibold">{new Date(booking.bookingDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tour Dates</p>
                  <p className="font-semibold">
                    {new Date(tour?.startDate || '').toLocaleDateString()} - 
                    {new Date(tour?.endDate || '').toLocaleDateString()}
                  </p>
                </div>
              </div>
              {booking.specialRequests && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Special Requests</p>
                  <p className="font-semibold">{booking.specialRequests}</p>
                </div>
              )}
              {booking.status === 'PENDING' && (
                <button
                  onClick={() => handleCancelBooking(booking.id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}; 