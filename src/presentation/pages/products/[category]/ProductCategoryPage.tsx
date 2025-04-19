import { useParams } from "react-router-dom";

const ProductCategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold capitalize">{category}</h1>
      <p className="text-muted-foreground">Danh mục sản phẩm theo loại.</p>
      {/* TODO: Hiển thị sản phẩm tại đây */}
    </div>
  );
};

export default ProductCategoryPage;
