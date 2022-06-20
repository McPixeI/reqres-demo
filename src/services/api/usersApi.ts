import { baseApi } from "./baseApi";

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
      query: (page = 1) => `users?page=${page}&per_page=2`,
    }),
  }),
});

export const { useGetAllUsersPaginatedQuery } = usersApi;
