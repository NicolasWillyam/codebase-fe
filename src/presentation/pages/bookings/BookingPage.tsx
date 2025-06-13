import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";
import { Badge } from "@/presentation/components/ui/badge";
import { ScrollArea } from "@/presentation/components/ui/scroll-area";
import { Skeleton } from "@/presentation/components/ui/skeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useGetAllBookingsQuery } from "@/features/homestay/api/bookingApi";
import { Button } from "@/presentation/components/ui/button";
import { Bell, Heart, ShoppingBag, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@radix-ui/react-select";

const BASE_URL = "http://localhost:3000/api/v1";
const filters = [
  "Khách sạn",
  "Vé máy bay",
  "Vé xe khách",
  "Đưa đón sân bay",
  "Cho thuê xe",
  "Vui chơi & Giải trí",
];

const BookingPage = () => {
  const [showFilter, setShowFilter] = useState(true);
  const navigate = useNavigate();
  const { data: bookings, isLoading, error } = useGetAllBookingsQuery();
  const [homestays, setHomestays] = useState<any[]>([]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    );
  }

  if (error)
    return <p className="text-red-500">Đã xảy ra lỗi khi tải dữ liệu!</p>;

  return (
    <div className="">
      <div className="w-full h-auto transition-all duration-300 border-b bg-white fixed z-10 top-0 py-2 pb-4">
        <div className="max-w-[1380px] mx-auto px-4 flex items-center justify-between">
          <div
            className="flex items-center"
            onClick={() => {
              navigate("/search");
            }}
          >
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

          {/* <SearchRoomBar zoomIn={false} /> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-32 px-4">
        <ScrollArea className="h-[calc(100vh-160px)] pr-2">
          <div className="space-y-6">
            {bookings?.data.map((b) => (
              <Card key={b.id} className="rounded-2xl shadow border">
                <CardContent className="flex flex-col md:flex-row gap-6 px-6">
                  {/* Left: Image */}
                  <div className="w-80 aspect-[3/2] overflow-hidden rounded-xl">
                    <img
                      src={b.homestay?.images?.[0]}
                      alt={b.homestay?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right: Info */}
                  <div className="flex-1 space-y-3">
                    {/* Top: Title + location */}
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {b.homestay?.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {b.homestay?.city}, {b.homestay?.country}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            b.status === "confirmed"
                              ? "default"
                              : b.status === "cancelled"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {b.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          Đặt lúc:{" "}
                          {format(new Date(b.createdAt), "dd/MM/yyyy HH:mm")}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    {/* Mid: Booking info */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm">
                      <p>
                        <strong>Khách:</strong> {b.fullName}
                      </p>
                      <p>
                        <strong>Số khách:</strong> {b.numberOfGuests}
                      </p>
                      <p>
                        <strong>Giá/đêm:</strong>{" "}
                        {(b.homestay?.pricePerNight || 0).toLocaleString(
                          "vi-VN"
                        )}
                        ₫
                      </p>
                      <p>
                        <strong>Ngày nhận:</strong>{" "}
                        {format(new Date(b.checkInDate), "dd/MM/yyyy")}
                      </p>
                      <p>
                        <strong>Ngày trả:</strong>{" "}
                        {format(new Date(b.checkOutDate), "dd/MM/yyyy")}
                      </p>
                      <p>
                        <strong>SĐT:</strong> {b.phone}
                      </p>
                    </div>

                    <Separator />

                    {/* Bottom: Avatar host/guest */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3">
                        {/* <Avatar>
                          <AvatarImage src="/avatars/01.png" />
                          <AvatarFallback>KH</AvatarFallback>
                        </Avatar> */}
                        <div>
                          <p className="font-medium">{b.fullName}</p>
                          <p className="text-xs text-muted-foreground">Khách</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          #{b.id.slice(0, 6).toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default BookingPage;
