import React, { useState, useEffect } from 'react';
import { Tour } from '../../domain/types/booking';
import { bookingService } from '../../infrastructure/services/bookingService';
import { Link } from 'react-router-dom';

export const ToursPage: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const toursData = await bookingService.getTours();
        setTours(toursData);
      } catch (err) {
        setError('Failed to load tours');
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={tour.imageUrl}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{tour.name}</h2>
              <p className="text-gray-600 mb-2">{tour.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">${tour.price}</span>
                <span>{tour.duration} days</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{tour.location}</span>
                <span>Max group: {tour.maxGroupSize}</span>
              </div>
              <Link
                to={`/booking/${tour.id}`}
                className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 