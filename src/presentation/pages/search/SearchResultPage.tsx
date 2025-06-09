import { useGetHomestaysQuery } from "@/features/homestay/api/homestayApi";
import { HotelCard } from "@/presentation/components/cards/HotelCard";
import { SearchBar } from "@/presentation/components/searchs/SearchBar";
import { SearchRoomBar } from "@/presentation/components/searchs/SearchRoomBar";
import { Button } from "@/presentation/components/ui/button";
import { FilterTabs } from "@/presentation/filters/FilterTabs";
import { Bell, Heart, ShoppingBag, User } from "lucide-react";
import React, { useEffect, useState } from "react";

const filters = [
  "Khách sạn",
  "Vé máy bay",
  "Vé xe khách",
  "Đưa đón sân bay",
  "Cho thuê xe",
  "Vui chơi & Giải trí",
];

const SearchResultPage = () => {
  const [showFilter, setShowFilter] = useState(true);
  const { data, isLoading, error } = useGetHomestaysQuery({});

  console.log(data);

  useEffect(() => {
    const handleScroll = () => {
      setShowFilter(window.scrollY < 50); // Ẩn nếu cuộn quá 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) return null;
  return (
    <>
      <div className="w-full h-auto transition-all duration-300 border-b bg-white fixed z-10 top-0 py-2 pb-4">
        <div className="max-w-[1380px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/icons/logo.png" alt="" width={50} />
            <p className="text-xl font-medium tracking-tight -mb-2 -ml-1">
              gomore
            </p>
          </div>
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full h-9 w-9"
            >
              <User />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full h-9 w-9"
            >
              <Heart />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full h-9 w-9"
            >
              <Bell />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full h-9 w-9"
            >
              <ShoppingBag />
            </Button>
          </div>
        </div>
        <div className="-mt-10">
          <div
            className={`
                transition-all duration-300 ease-in-out overflow-hidden
                ${showFilter ? "max-h-[60px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="flex gap-2 flex-wrap justify-center mb-4">
              {filters.map((item, i) => (
                <Button
                  key={i}
                  size={"sm"}
                  variant={item === "All" ? "default" : "ghost"}
                  className={
                    item === "All"
                      ? "bg-foreground rounded-full px-4"
                      : "bg-foreground/5 rounded-full px-4"
                  }
                >
                  <p className="text-sm">{item}</p>
                </Button>
              ))}
            </div>
          </div>

          <SearchRoomBar zoomIn={showFilter} />
        </div>
      </div>
      <section className="min-h-screen max-w-[1380px] px-4 mx-auto  w-full bg-center bg-no-repeat bg-cover space-y-6 py-40">
        <div className="text-center space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mt-6">
            {data.data.map((item, id) => (
              <HotelCard key={id} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResultPage;
