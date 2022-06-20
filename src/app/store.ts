import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { usersApi } from "../services/api/usersApi";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
