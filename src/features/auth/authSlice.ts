import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../app/services/auth";
import { RootState } from "../../app/store";

type AuthState = {
  token: string | null;
};

const initialState = { token: null } as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.token;
