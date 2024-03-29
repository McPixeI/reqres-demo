import { baseApi } from "./base";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsersPaginated: build.query<UserListResponse, number | void>({
      query: (page = 1) => `users?page=${page}`,
    }),
    getUserById: build.query<User, number>({
      query: (id) => `users/${id}`,
      transformResponse: (rawResult: { data: User }) => rawResult.data,
    }),
  }),
});

export const { useGetAllUsersPaginatedQuery, useGetUserByIdQuery } = usersApi;
