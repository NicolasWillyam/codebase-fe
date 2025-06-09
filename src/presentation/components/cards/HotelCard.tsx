import { StarIcon, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function HotelCard({ hotel }) {
  return (
    <Card className="border-none p-0 shadow-none rounded-xl aspect-3/4 object-cover overflow-hidden bg-center bg-cover bg-no bg-[url('https://www.holidify.com/images/cmsuploads/compressed/226441293_20210122155341.jpg')]">
      <div className="p-2 h-full flex flex-col justify-between">
        <div className="w-fit ml-auto mt-1 mr-1 bg-white/20 backdrop-blur-sm text-white rounded-xl bottom-0 flex items-center justify-between p-1 px-2">
          <StarIcon className="h-4 w-4 mr-1 text-yellow-500" />
          <p className="font-medium">{hotel.rating}</p>
        </div>

        <div className="w-full bg-white/20 backdrop-blur-sm text-white rounded-xl bottom-0 flex items-end justify-between p-2 px-3">
          <div className="py-0.5 space-y-1">
            <p className="text-lg font-medium">{hotel.name}</p>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> <p>{hotel.location}</p>
            </div>
          </div>
          <p className="font-medium text-2xl">${hotel.price}</p>
        </div>
      </div>
    </Card>
  );
}
