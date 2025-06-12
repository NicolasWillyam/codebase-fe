// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { homestayApi } from "@/features/homestay/api/homestayApi";

export const store = configureStore({
  reducer: {
    [homestayApi.reducerPath]: homestayApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homestayApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
