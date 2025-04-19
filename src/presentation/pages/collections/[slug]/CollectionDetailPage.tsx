import { useParams } from "react-router-dom";

const CollectionDetailPage = () => {
  const { slug } = useParams();

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold uppercase">{slug}</h1>
      <p className="text-muted-foreground">Thông tin chi tiết bộ sưu tập.</p>
      {/* TODO: Hiển thị sản phẩm thuộc BST */}
    </div>
  );
};

export default CollectionDetailPage;
