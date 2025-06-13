import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateHomestayBookingDto } from "../model/dto"; // Đường dẫn tới DTO của bạn
import { Booking } from "@/domain/types/booking";
const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:3000/api/v1/";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/",
  }),
  tagTypes: ["Booking"],
  endpoints: (builder) => ({
    createHomestayBooking: builder.mutation<
      any, // response type (có thể khai báo chi tiết hơn nếu cần)
      CreateHomestayBookingDto
    >({
      query: (body) => ({
        url: "/bookings/homestay",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Booking"],
    }),
    getAllBookings: builder.query<Booking[], void>({
      query: () => ({
        url: "bookings/homestay",
        method: "GET",
      }),
      providesTags: ["Booking"],
    }),
  }),
});

export const { useCreateHomestayBookingMutation, useGetAllBookingsQuery } =
  bookApi;
