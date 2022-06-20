import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  reducerPath: "baseApi",
  tagTypes: ["users"],
  endpoints: () => ({}),
});
