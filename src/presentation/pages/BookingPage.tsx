import React, { useState, useEffect } from 'react';
import { Tour, BookingFormData } from '../../domain/types/booking';
import { bookingService } from '../../infrastructure/services/bookingService';
import { useParams, useNavigate } from 'react-router-dom';

export const BookingPage: React.FC = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<Tour | null>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    tourId: tourId || '',
    numberOfPeople: 1,
    specialRequests: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        if (tourId) {
          const tourData = await bookingService.getTourById(tourId);
          setTour(tourData);
        }
      } catch (err) {
        setError('Failed to load tour details');
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [tourId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await bookingService.createBooking(formData);
      navigate('/bookings');
    } catch (err) {
      setError('Failed to create booking');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!tour) return <div>Tour not found</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Tour: {tour.name}</h1>
      <div className="mb-4">
        <img src={tour.imageUrl} alt={tour.name} className="w-full h-64 object-cover rounded-lg" />
      </div>
      <div className="mb-4">
        <p className="text-gray-600">{tour.description}</p>
        <p className="font-semibold mt-2">Price: ${tour.price} per person</p>
        <p>Duration: {tour.duration} days</p>
        <p>Location: {tour.location}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Number of People</label>
          <input
            type="number"
            min="1"
            max={tour.maxGroupSize}
            value={formData.numberOfPeople}
            onChange={(e) => setFormData({ ...formData, numberOfPeople: parseInt(e.target.value) })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Special Requests</label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}; 