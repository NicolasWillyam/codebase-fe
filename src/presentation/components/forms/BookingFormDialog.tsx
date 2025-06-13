import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/presentation/components/ui/dialog";
import { Button } from "@/presentation/components/ui/button";
import { Input } from "@/presentation/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Calendar } from "@/presentation/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/presentation/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import DateRangePicker from "../searchs/DateRangePicker";
import React from "react";
import { CreateHomestayBookingDto } from "@/features/homestay/model/dto";
import { useCreateHomestayBookingMutation } from "@/features/homestay/api/bookingApi";
import toast from "react-hot-toast";

// 🧩 Zod schema
const bookingSchema = z.object({
  fullName: z.string().min(1, "Vui lòng nhập họ tên"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(8, "Vui lòng nhập số điện thoại hợp lệ"),
  homestayId: z.string().uuid("ID không hợp lệ"),
  checkInDate: z.string().min(1, "Vui lòng chọn ngày nhận phòng"),
  checkOutDate: z.string().min(1, "Vui lòng chọn ngày trả phòng"),
  numberOfGuests: z.number().min(1, "Phải có ít nhất 1 khách"),
  note: z.string().optional(),
  type: z.literal("homestay").optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingFormDialog({ homestayId }: { homestayId: string }) {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      homestayId,
      numberOfGuests: 2,
      type: "homestay",
      checkInDate: "", // <== thêm vào
      checkOutDate: "", // <== thêm vào
    },
  });
  const onSubmit = async (payload: BookingFormData) => {
    try {
      // ⏳ Delay 1.5 giây trước khi gửi request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      await toast.promise(createBooking(payload).unwrap(), {
        loading: "Đang xử lý đặt phòng...",
        success: "Đặt phòng thành công!",
        error: "Có lỗi xảy ra!",
      });

      setOpen(false); // đóng form
      reset(); // reset state
      setDateRange({}); // reset ngày
    } catch (error) {
      console.error("Booking failed", error);
    }
  };

  const handleDateChange = (range: { from?: Date; to?: Date }) => {
    setDateRange(range);
    if (range.from) {
      setValue("checkInDate", range.from.toISOString().split("T")[0]);
    }
    if (range.to) {
      setValue("checkOutDate", range.to.toISOString().split("T")[0]);
    }
  };

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [createBooking, { isLoading }] = useCreateHomestayBookingMutation();

  const handleSubmitBooking = async (payload: CreateHomestayBookingDto) => {
    try {
      const res = await createBooking(payload).unwrap();
      console.log("✅ Booking success:", res);
    } catch (error) {
      console.error("❌ Booking failed:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-12 rounded-xl">Đặt phòng ngay</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[540px] p-6 rounded-2xl">
        <DialogHeader>
          <DialogTitle>Đặt phòng homestay</DialogTitle>
          <DialogDescription>Điền thông tin để đặt chỗ.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input placeholder="Họ và tên" {...register("fullName")} />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}

          <Input placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <Input placeholder="Số điện thoại" {...register("phone")} />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}

          {/* 📅 Calendar range picker */}
          <div className="grid gap-2">
            <label className="text-sm text-foreground/60">Chọn ngày</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateRange.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "dd/MM/yyyy")} -{" "}
                        {format(dateRange.to, "dd/MM/yyyy")}
                      </>
                    ) : (
                      format(dateRange.from, "dd/MM/yyyy")
                    )
                  ) : (
                    <span>Chọn ngày đi và về</span>
                  )}
                </Button>
              </PopoverTrigger>
            </Popover>
            <Calendar
              className="rounded-xl"
              mode="range"
              selected={dateRange}
              onSelect={handleDateChange}
              initialFocus
              numberOfMonths={2}
            />

            {errors.checkOutDate && (
              <p className="text-red-500 text-sm">
                {errors.checkOutDate.message}
              </p>
            )}
          </div>

          <Input
            placeholder="Số khách"
            type="number"
            {...register("numberOfGuests", { valueAsNumber: true })}
          />
          {errors.numberOfGuests && (
            <p className="text-red-500 text-sm">
              {errors.numberOfGuests.message}
            </p>
          )}

          <Textarea placeholder="Ghi chú (tuỳ chọn)" {...register("note")} />
          <Input type="hidden" {...register("homestayId")} />
          <Input type="hidden" {...register("type")} />
          <Input type="hidden" {...register("checkInDate")} />
          <Input type="hidden" {...register("checkOutDate")} />

          <Button
            type="submit"
            className="w-full mt-4 h-12"
            disabled={isLoading}
          >
            {isLoading ? "Đang đặt..." : "Xác nhận đặt chỗ"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
