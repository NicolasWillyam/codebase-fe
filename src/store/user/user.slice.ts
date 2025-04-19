import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
};

type UserState = {
  info: User | null;
  isAuthenticated: boolean;
};

const initialState: UserState = {
  info: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.info = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.info = null;
      state.isAuthenticated = false;
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.info) {
        state.info = { ...state.info, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
