import ProductLayout from "@/app/layout/ProductLayout";
import ProductCard from "@/presentation/components/cards/ProductCard";
import { useParams } from "react-router-dom";

const ProductCategoryPage = () => {
  const { category } = useParams();

  return (
    <ProductLayout>
      <div className="text-center py-1">
        <p className="text-lg font-light z-10 uppercase">{category}</p>
        <p className="text-[10px] font-light z-10 text-[#C9BFB6]">
          24 products
        </p>
      </div>
      <div className="w-full flex justify-between p-4 mt-1">
        <button className="text-xs underline underline-offset-4">
          <p>Sort By</p>
        </button>
        <button className="text-xs underline underline-offset-4">
          <p>Filter</p>
        </button>
      </div>
      <div className="w-full grid grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </ProductLayout>
  );
};

export default ProductCategoryPage;
