import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { slug } = useParams();

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Chi tiết sản phẩm</h1>
      <p className="text-muted-foreground">Slug: {slug}</p>
      {/* TODO: Thêm gallery, chọn size, màu, nút mua */}
    </div>
  );
};

export default ProductDetailPage;
