import ProductCard from "@/presentation/components/cards/ProductCard";

const HomePage = () => {
  return (
    <>
      <div className="bg-[url('https://fanciclub.io/wp-content/uploads/2025/03/adobe-express-file-1.jpg')] relative bg-cover bg-center min-h-screen flex flex-col items-center justify-end text-white p-4">
        <div className="h-full w-full absolute bg-black/20 top-0"></div>

        <h1 className="text-[10px] font-light z-10">Shop now</h1>
        <p className="text-lg font-light z-10">FW25 ROARING</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-end text-white p-4 relative">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://fanciclub.io/wp-content/uploads/2025/02/15-resize.mp4"
              type="video/mp4"
            />
          </video>
          <div className="h-full w-full absolute bg-black/20 top-0"></div>
          <h1 className="text-[10px] font-light z-10">Shop now</h1>
          <p className="text-lg font-light z-10">FW25 ROARING</p>
        </div>

        {/* //https://fanciclub.io/wp-content/uploads/2024/12/d4-4-864x1080.png */}
        {/* https://fanciclub.io/wp-content/uploads/2024/12/d4-3-864x1080.png */}

        <div className="bg-[url('https://fanciclub.io/wp-content/uploads/2024/12/67-6.jpg')] relative bg-cover bg-center min-h-screen flex flex-col items-center justify-end text-white p-4">
          <div className="h-full w-full absolute bg-black/20 top-0"></div>
          <h1 className="text-[10px] font-light z-10">Shop now</h1>
          <p className="text-lg font-light z-10 uppercase">Dresses</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="bg-[url('https://fanciclub.io/wp-content/uploads/2025/03/adobe-express-file-1.jpg')] relative bg-cover bg-center min-h-screen flex flex-col items-center justify-end text-white p-4">
        <div className="h-full w-full absolute bg-black/20 top-0"></div>

        <h1 className="text-[10px] font-light z-10">Shop now</h1>
        <p className="text-lg font-light z-10">FW25 ROARING</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-end text-white p-4 relative">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://fanciclub.io/wp-content/uploads/2025/02/15-resize.mp4"
              type="video/mp4"
            />
          </video>
          <div className="h-full w-full absolute bg-black/20 top-0"></div>
          <h1 className="text-[10px] font-light z-10">Shop now</h1>
          <p className="text-lg font-light z-10">FW25 ROARING</p>
        </div>

        {/* //https://fanciclub.io/wp-content/uploads/2024/12/d4-4-864x1080.png */}
        {/* https://fanciclub.io/wp-content/uploads/2024/12/d4-3-864x1080.png */}

        <div className="bg-[url('https://fanciclub.io/wp-content/uploads/2024/12/67-6.jpg')] relative bg-cover bg-center min-h-screen flex flex-col items-center justify-end text-white p-4">
          <div className="h-full w-full absolute bg-black/20 top-0"></div>
          <h1 className="text-[10px] font-light z-10">Shop now</h1>
          <p className="text-lg font-light z-50 uppercase">Dresses</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
