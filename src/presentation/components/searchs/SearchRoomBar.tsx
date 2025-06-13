// src/components/SearchRoomBar.tsx
import {
  ArrowDown,
  ArrowRight,
  CalendarIcon,
  ChevronDown,
  DollarSign,
  Map,
  MapIcon,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/presentation/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/presentation/components/ui/popover";
import { Calendar } from "@/presentation/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select";
import { SearchPriceSlider } from "../sliders/SearchPriceSlider";
import { DestinationSelect } from "./DestinationSelect";
import DateRangePicker from "./DateRangePicker";
import { GuestPicker } from "./GuestPicker";
import { useSearchHomestaysMutation } from "@/features/homestay/api/homestayApi";

export function SearchRoomBar({
  zoomIn,
  onSearch,
  initialPayload = {},
}: {
  zoomIn: boolean;
  onSearch: (payload: any) => void;
  initialPayload?: any;
}) {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>(() => ({
    from: initialPayload.checkIn ? new Date(initialPayload.checkIn) : undefined,
    to: initialPayload.checkOut ? new Date(initialPayload.checkOut) : undefined,
  }));

  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialPayload.minPrice ?? 260000,
    initialPayload.maxPrice ?? 3500000,
  ]);

  const [destination, setDestination] = useState<{
    country: string;
    city: string;
  } | null>(() =>
    initialPayload.city || initialPayload.country
      ? {
          country: initialPayload.country ?? "",
          city: initialPayload.city ?? "",
        }
      : null
  );

  const [guest, setGuest] = useState(initialPayload.guests?.toString() ?? "2");

  // const handleSearch = async () => {
  //   const payload = {
  //     city: destination?.city,
  //     country: destination?.country,
  //     checkIn: dateRange.from?.toISOString().split("T")[0],
  //     checkOut: dateRange.to?.toISOString().split("T")[0],
  //     minPrice: priceRange[0],
  //     maxPrice: priceRange[1],
  //     guests: Number(guest),
  //   };

  //   const result = await searchHomestays(payload).unwrap();
  //   console.log(result);
  // };

  const buildSearchPayload = () => {
    return {
      city: destination?.city,
      country: destination?.country,
      checkIn: dateRange.from?.toISOString().split("T")[0],
      checkOut: dateRange.to?.toISOString().split("T")[0],
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      guests: Number(guest),
    };
  };

  // const handleSearch = async (payload: any) => {
  //   try {
  //     const result = await searchHomestays(payload).unwrap();
  //     setSearchResults(result);
  //   } catch (error) {
  //     console.error("Search error:", error);
  //   }
  // };

  return (
    <div
      className={cn(
        "flex justify-center items-center will-change-auto border w-fit mx-auto rounded-full px-3 pr-1 bg-white shadow-md transition-all duration-500 ease-in-out",
        zoomIn ? "scale-100 opacity-100 h-16" : "scale-95 opacity-80 h-12"
      )}
    >
      {/* Where */}
      <DestinationSelect
        zoomIn={zoomIn}
        destination={destination}
        setDestination={setDestination}
      />
      {/* Date Picker */}
      <DateRangePicker
        zoomIn={zoomIn}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      {/* Budget Select */}
      <div className="border-l">
        {zoomIn && (
          <p className="px-3 text-foreground/50 text-xs -mb-1 mt-1">Budgets</p>
        )}

        <Select>
          <SelectTrigger
            className={cn(
              zoomIn ? "w-60" : "w-full",
              "border-none shadow-none pl-0"
            )}
          >
            <Button variant={"link"} className="p-0">
              <Wallet className="w-4 h-4" />
              <p className="text-sm font-medium">
                ₫{priceRange[0].toLocaleString("vi-VN")} - ₫
                {priceRange[1].toLocaleString("vi-VN")}
              </p>
            </Button>
          </SelectTrigger>

          <SelectContent>
            <SearchPriceSlider
              zoomIn={zoomIn}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </SelectContent>
        </Select>
      </div>

      {/* Guest Select */}
      <GuestPicker
        zoomIn={zoomIn}
        guest={Number(guest)}
        setGuest={(g) => setGuest(g.toString())}
      />

      {zoomIn ? (
        <Button
          onClick={() => onSearch(buildSearchPayload())}
          className={cn(zoomIn ? "h-14" : "h-10", "px-4 pl-6 rounded-full")}
        >
          <div className="flex gap-2 items-center">
            <p>Plan My Trip</p>
            <ArrowRight size={16} />
          </div>
        </Button>
      ) : (
        <Button
          onClick={() => onSearch(buildSearchPayload())}
          className={cn(zoomIn ? "h-14" : "h-10", "px-4 pl-6 rounded-full")}
        >
          <ArrowRight size={16} />
        </Button>
      )}
    </div>
  );
}
