import { useParams } from 'react-router-dom';
import { useHomestayDetail } from '@/application/hooks/useHomestays';
import BookingForm from '@/presentation/components/homestay/BookingForm';
import ReviewSection from '@/presentation/components/homestay/ReviewSection';

export default function HomestayDetailPage() {
  const { id } = useParams();
  const { data } = useHomestayDetail(id || '');

  if (!data) return <p>Đang tải...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
      <img src={data.images[0]} alt={data.name} className="w-full h-80 object-cover rounded" />
      <p className="mt-4">{data.description}</p>
      <p className="font-semibold mt-2">Giá: {data.pricePerNight.toLocaleString()} VND/đêm</p>

      <BookingForm homestayId={data.id} />
      <ReviewSection homestayId={data.id} />
    </div>
  );
}
