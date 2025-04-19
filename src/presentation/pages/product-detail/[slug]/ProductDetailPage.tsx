import ProductCard from "@/presentation/components/cards/ProductCard";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { slug } = useParams();

  return (
    <div className="">
      <div className="relative w-full flex">
        {/* Cột trái scroll dài */}
        <div className="w-3/5 min-h-screen relative pt-9 bg-[#FAF9F8]">
          <div className="">
            <img
              src="https://fanciclub.io/wp-content/uploads/2024/12/59-1-2.png"
              className="w-full h-full object-cover mix-blend-multiply"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://fanciclub.io/wp-content/uploads/2024/12/59-2-2.png"
              className="w-full h-full object-cover mix-blend-multiply"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://fanciclub.io/wp-content/uploads/2024/12/59-3-2.png"
              className="w-full h-full object-cover mix-blend-multiply"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://fanciclub.io/wp-content/uploads/2024/12/59-5-1.png"
              className="w-full h-full object-cover mix-blend-multiply"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://fanciclub.io/wp-content/uploads/2024/12/59-6-1.png"
              className="w-full h-full object-cover mix-blend-multiply"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://fanciclub.io/wp-content/uploads/2024/12/59-7-1.png"
              className="w-full h-full object-cover mix-blend-multiply"
              alt=""
            />
          </div>

          <div className=""></div>
        </div>

        {/* Cột phải giữ nguyên trong 300vh đầu */}
        <div className="w-2/5">
          <div className="sticky top-0 h-screen flex items-center justify-center ">
            <div className="space-y-6">
              <div className="text-center py-1">
                <p className="text-[10px] font-light z-10 text-[#C9BFB6] uppercase">
                  Corsets, Tops
                </p>
                <p className="text-lg font-light z-10 uppercase">
                  Julia Halterneck Corset Top
                </p>
                <p className="text-xs mt-2 z-10 uppercase">
                  VND 8 448 000 — VND 9 448 000
                </p>
              </div>
              <div className="text-center space-y-4">
                <p className="text-xs z-10 text-[#C9BFB6] uppercase">
                  COLOR: <span className="text-black">GREY</span>
                </p>
                <button className="bg-black text-white p-2.5 px-5 text-xs cursor-pointer">
                  <p>Add To Cart</p>
                </button>
              </div>
              <div className="flex gap-6 text-center justify-center mx-auto">
                <p className="text-xs underline underline-offset-4 decoration-[1px] decoration-[#C9BFB6] cursor-pointer">
                  <p>Details</p>
                </p>
                <p className="text-xs underline underline-offset-4 decoration-[1px] decoration-[#C9BFB6] cursor-pointer">
                  <p>Sizing</p>
                </p>
                <p className="text-xs underline underline-offset-4 decoration-[1px] decoration-[#C9BFB6] cursor-pointer">
                  <p>Shipping And Returns</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-6">
        <p className="text-xs uppercase">Go great with</p>
      </div>
      <div className="grid grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="text-center p-6">
        <p className="text-xs uppercase">Recently viewed</p>
      </div>
      <div className="grid grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductDetailPage;
