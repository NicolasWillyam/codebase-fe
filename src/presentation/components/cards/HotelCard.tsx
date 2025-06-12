import { StarIcon, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function HotelCard({ data }: { data: any }) {
  const name = data?.name ?? "Không có tên";
  const image = data?.images?.[0] ?? "/icons/logo.jpeg";
  const price = data?.pricePerNight?.toLocaleString("vi-VN") ?? "0";

  return (
    <Card className="border-none p-0 shadow-none rounded-xl gap-2">
      <div className="relative shadow-md rounded-2xl">
        <img
          src={image}
          alt={name}
          className="aspect-square  object-cover rounded-2xl"
        />
        <div className="w-full p-2 h-full flex flex-col justify-between items-end top-0 absolute ml-auto">
          <div className="w-fit ml-auto mt-1 mr-1 bg-white/20 backdrop-blur-sm text-white rounded-full bottom-0 flex items-center justify-between p-2 px-2">
            <Heart className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="px-1 space-y-1">
        <p className="text-left line-clamp-2 font-medium">{name}</p>
        <div className="flex items-center gap-2 text-left text-[11px] text-foreground/50">
          <p className="text-[11px]">
            <span className="underline underline-offset-1 mr-0.5">đ</span>
            {price} cho 1 đêm
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            <StarIcon size={11} /> 4,9
          </p>
        </div>
      </div>
    </Card>
  );
}
