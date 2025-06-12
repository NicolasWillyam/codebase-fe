import { useHomestays } from '@/application/hooks/useHomestay';
import HomestayCard from '@/presentation/components/homestay/HomestayCard';

export default function HomestayListPage() {
  const { data, isLoading } = useHomestays();

  if (isLoading) return <p>Đang tải...</p>;

  return (
    <div>
      <h1>Danh sách Homestay</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map(h => <HomestayCard key={h.id} homestay={h} />)}
      </div>
    </div>
  );
}
