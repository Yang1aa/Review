import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
  }),
  endpoints(build) {
    return {
      register: build.mutation({
        query(user) {
          return {
            url: "test-users",
            method: "post",
            body: { data: user },
          };
        },
      }),
      login: build.query({
        query(user) {
          return {
            url: "test-users",
            method: "post",
            body: { data: user },
          };
        },
      }),
    };
  },
});
export const { useRegisterMutation } = userApi;
export default userApi;
