import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/product/julia-halterneck-corset-top?pa_color=grey");
      }}
      className="w-full bg-[#FAF9F8] p-4 cursor-pointer"
    >
      <div className="relative group w-full overflow-hidden aspect-[3/4] mix-blend-multiply">
        {/* Ảnh A (hover image) */}
        <img
          src="https://fanciclub.io/wp-content/uploads/2024/12/d4-4-864x1080.png"
          alt="Ảnh A"
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 z-10 relative"
        />

        {/* Ảnh B (default image), blend với background */}
        <img
          src="https://fanciclub.io/wp-content/uploads/2024/12/d4-3-864x1080.png"
          alt="Ảnh B"
          className="absolute inset-0 w-full h-full object-cover  z-0"
        />
      </div>

      {/* Nội dung */}
      <div className="text-center space-y-1 py-1">
        <h1 className="text-xs font-medium">Grace Long sleeve Crop Jacket</h1>
        <p className="text-[10px] uppercase text-[#C9BFB6]">
          VND 9 216 000 - VND 12 062 000
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
