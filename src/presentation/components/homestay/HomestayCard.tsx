import { Homestay } from '@/domain/entities/Homestay';
import { Link } from 'react-router-dom';

export default function HomestayCard({ homestay }: { homestay: Homestay }) {
  return (
    <Link to={`/homestays/${homestay.id}`} className="border rounded shadow p-3 hover:shadow-lg">
      <img src={homestay.images[0]} alt={homestay.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{homestay.name}</h2>
      <p>{homestay.location}</p>
      <p className="text-sm text-gray-600">{homestay.pricePerNight.toLocaleString()} VND/đêm</p>
    </Link>
  );
}


// src/presentation/components/homestay/BookingForm.tsx
import { useState } from 'react';
import { homestayService } from '@/application/services/homestayService';

export default function BookingForm({ homestayId }: { homestayId: string }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await homestayService.book({ homestayId, checkIn, checkOut });
    alert('Đã gửi yêu cầu đặt phòng!');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded">
      <h3 className="font-bold mb-2">Đặt phòng</h3>
      <div className="flex flex-col gap-2">
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required className="border p-2 rounded" />
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Đặt phòng</button>
      </div>
    </form>
  );
}