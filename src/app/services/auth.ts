import { baseApi } from "./base";

export interface AuthRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  token: string;
}

export interface LoginResponse {
  token: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<RegisterResponse, AuthRequest>({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: build.mutation<LoginResponse, AuthRequest>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: build.mutation({
      query: () => "",
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
