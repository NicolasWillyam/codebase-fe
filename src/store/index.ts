import { configureStore } from "@reduxjs/toolkit";

// Import các slice reducer
import cartReducer from "./cart/cart.slice";
import userReducer from "./user/user.slice";
// ...import thêm sau này

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    // Thêm các slice khác tại đây
  },
  devTools: import.meta.env.MODE !== "production", // Bật devtools nếu không phải production
});

// Các kiểu dùng trong toàn ứng dụng
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
