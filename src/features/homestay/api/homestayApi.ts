import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Homestay,
  CreateHomestayDto,
  UpdateHomestayDto,
  HomestaySearchQueryDto,
} from "../model/dto";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const homestayApi = createApi({
  reducerPath: "homestayApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://icheck-dev.ikameglobal.com/api/v1",
  }),
  tagTypes: ["Homestay"],
  endpoints: (builder) => ({
    getHomestays: builder.query<Homestay[], HomestaySearchQueryDto>({
      query: (params) => ({
        url: "homestays",
        params,
      }),
      providesTags: ["Homestay"],
    }),
    getHomestayById: builder.query<Homestay, string>({
      query: (id) => `homestays/${id}`,
      providesTags: (result, error, id) => [{ type: "Homestay", id }],
    }),
    createHomestay: builder.mutation<void, CreateHomestayDto>({
      query: (body) => ({
        url: "homestays",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Homestay"],
    }),
    updateHomestay: builder.mutation<
      void,
      { id: string; data: UpdateHomestayDto }
    >({
      query: ({ id, data }) => ({
        url: `homestays/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Homestay", id }],
    }),
    deleteHomestay: builder.mutation<void, string>({
      query: (id) => ({
        url: `homestays/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Homestay", id }],
    }),
  }),
});

export const {
  useGetHomestaysQuery,
  useGetHomestayByIdQuery,
  useCreateHomestayMutation,
  useUpdateHomestayMutation,
  useDeleteHomestayMutation,
} = homestayApi;
