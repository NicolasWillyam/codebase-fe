import { useMemo, useState } from "react";
import { Map, SearchIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select";
import { Button } from "@/presentation/components/ui/button";
import { ScrollArea } from "@/presentation/components/ui/scroll-area";
import { Input } from "@/presentation/components/ui/input";
import { cn } from "@/lib/utils";

const destinations = [
  { country: "Việt Nam", city: "Hà Giang" },
  { country: "Thái Lan", city: "Bangkok" },
  { country: "Việt Nam", city: "Nha Trang" },
  { country: "Hoa Kỳ", city: "Twin Lakes, Colorado" },
  { country: "Italy", city: "La Spezia" },
  { country: "Việt Nam", city: "Điện Bàn" },
  { country: "Thụy Sĩ", city: "Küssnacht" },
  { country: "Italy", city: "Oleggio" },
  { country: "Singapore", city: "Singapore" },
  { country: "Việt Nam", city: "Quảng Ninh" },
  { country: "Hoa Kỳ", city: "Sevierville, Tennessee" },
  { country: "Hoa Kỳ", city: "Helotes, Texas" },
  { country: "Thái Lan", city: "Khet Khlong Toei" },
  { country: "Hàn Quốc", city: "Chungnyeon-dong, Seodaemun-gu" },
  { country: "Nhật Bản", city: "Fujiyoshida" },
  { country: "Việt Nam", city: "Cao Bằng" },
  { country: "Việt Nam", city: "Quy Nhơn" },
  { country: "Đức", city: "Duckow" },
  { country: "Nhật Bản", city: "Shinano" },
  { country: "Italy", city: "Simignano" },
  { country: "Đức", city: "Essen" },
  { country: "Hoa Kỳ", city: "Dallas, Texas" },
  { country: "Nhật Bản", city: "Shimizu Ward, Shizuoka" },
  { country: "Thụy Sĩ", city: "Gersau" },
  { country: "Italy", city: "La Dogana-Cerati" },
  { country: "Việt Nam", city: "Hội An" },
  { country: "Việt Nam", city: "Vũng Tàu" },
  { country: "Nhật Bản", city: "Nishinari Ward, Osaka" },
  { country: "Úc", city: "Melbourne" },
  { country: "Italy", city: "Fiumefreddo Bruzio" },
  { country: "Việt Nam", city: "Hạ Long" },
  { country: "Canada", city: "Vancouver" },
  { country: "Thụy Sĩ", city: "Pfungen" },
  { country: "Hàn Quốc", city: "Jung-gu" },
  { country: "Thái Lan", city: "Khet Phra Khanong" },
  { country: "Hàn Quốc", city: "Goseo-myeon, Damyang" },
  { country: "Hoa Kỳ", city: "Marshall, North Carolina" },
  { country: "Việt Nam", city: "Huế" },
  { country: "Hàn Quốc", city: "Yangpyeong-gun" },
  { country: "Hàn Quốc", city: "Masan-myeon, Gurve" },
  { country: "Việt Nam", city: "Đà lạt" },
  { country: "Hàn Quốc", city: "Gangneung-si" },
  { country: "Hàn Quốc", city: "Yeongrang-dong, Sokcho-si" },
  { country: "Pháp", city: "Paris" },
  { country: "Thụy Sĩ", city: "Bern" },
  { country: "Việt Nam", city: "Đà Nẵng" },
  { country: "Nhật Bản", city: "Higashiizu" },
  { country: "Nhật Bản", city: "Kamikawa" },
  { country: "Italy", city: "Carmignano" },
  { country: "Hàn Quốc", city: "Yangyang-gun" },
  { country: "Hoa Kỳ", city: "Mount Vernon, Washington" },
  { country: "Nhật Bản", city: "Fujikawaguchiko" },
  { country: "Italy", city: "Casteldaccia" },
  { country: "Italy", city: "Molfetta" },
  { country: "Thụy Sĩ", city: "Veysonnaz" },
  { country: "Đức", city: "Reichshof" },
  { country: "Việt Nam", city: "Bản Luốc" },
  { country: "Đức", city: "Büren" },
  { country: "Hoa Kỳ", city: "Dunnellon, Florida" },
  { country: "Hoa Kỳ", city: "Chattanooga, Tennessee" },
  { country: "Thụy Sĩ", city: "Lucerne" },
  { country: "Hàn Quốc", city: "Seoul" },
  { country: "Nhật Bản", city: "Odawara" },
  { country: "Nhật Bản", city: "Tokyo" },
  { country: "Việt Nam", city: "Ninh Bình" },
  { country: "Hoa Kỳ", city: "Franklin, North Carolina" },
];

type Props = {
  zoomIn?: boolean;
  destination?: { country: string; city: string } | null;
  setDestination: (dest: { country: string; city: string }) => void;
};

export function DestinationSelect({
  zoomIn,
  destination,
  setDestination,
}: Props) {
  const [search, setSearch] = useState("");

  const grouped = useMemo(() => {
    const filtered = destinations.filter((d) =>
      d.city.toLowerCase().includes(search.toLowerCase())
    );

    return filtered.reduce((acc, cur) => {
      if (!acc[cur.country]) acc[cur.country] = [];
      acc[cur.country].push(cur);
      return acc;
    }, {} as Record<string, { city: string; country: string }[]>);
  }, [search]);

  const selectedValue = destination
    ? `${destination.city} - ${destination.country}`
    : "";

  const uniqueDestinations = destinations.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (v) => v.city === value.city && v.country === value.country
      )
  );

  return (
    <div>
      {zoomIn && (
        <p className="px-3 text-foreground/50 text-xs -mb-1 mt-1">
          Destinations
        </p>
      )}

      <Select
        value={selectedValue}
        onValueChange={(val) => {
          const [city, country] = val.split(" - ");
          setDestination({ city, country });
        }}
      >
        <SelectTrigger
          className={cn(
            zoomIn ? "w-64" : "w-full",
            "border-none shadow-none pl-0"
          )}
        >
          <Button variant={"link"} className="p-0">
            <Map className="w-4 h-4 mr-1" />
            <SelectValue placeholder="Destinations" />
          </Button>
        </SelectTrigger>

        <SelectContent className="w-96">
          <div className="w-full flex border rounded-lg items-center px-3 gap-2.5 h-9 mb-2">
            <SearchIcon size={18} />
            <Input
              className="border-none px-0 text-[13px] placeholder:text-[13px]"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destination..."
            />
          </div>

          <ScrollArea className="h-[60vh] pr-0">
            {Object.entries(grouped).map(([country, cities]) => (
              <div key={country}>
                <p className="px-3 text-xs text-muted-foreground font-medium mt-2 mb-1 uppercase">
                  {country}
                </p>
                {cities.map(({ city }) => (
                  <SelectItem
                    key={`${city} - ${country}`}
                    value={`${city} - ${country}`}
                    className="pl-6 focus:ring-0 focus:outline-none focus:border-none focus-visible:ring-0 radix-state-checked:ring-0 radix-state-checked:outline-none radix-state-checked:border-none"
                  >
                    <p>{city}</p>
                  </SelectItem>
                ))}
              </div>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
}
