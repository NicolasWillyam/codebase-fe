// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { homestayApi } from "@/features/homestay/api/homestayApi";
import { bookApi } from "@/features/homestay/api/bookingApi";

export const store = configureStore({
  reducer: {
    [homestayApi.reducerPath]: homestayApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homestayApi.middleware, bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
