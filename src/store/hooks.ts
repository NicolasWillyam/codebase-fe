import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Hook để dùng dispatch với type AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook để dùng selector với type RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
