import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IArticleSearchResponse,
  ICategoryArticles,
  IPopularNews,
} from "../types/api";

// const BASE_URL = "http://localhost:5000"; // Replace with your actual backend URL
const BASE_URL =
  "http://localhost:5000" || "https://news-app-redone.vercel.app";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPopularArticles: builder.query<IPopularNews[], void>({
      query: () => "/api/popular",
    }),
    searchArticles: builder.query<IArticleSearchResponse, string>({
      query: (searchQuery) => `/articlesearch?q=${searchQuery}`,
    }),
    getCategoryArticles: builder.query<ICategoryArticles, string>({
      query: (section) => `/categories/${section}`,
    }),
  }),
});

export const {
  useGetPopularArticlesQuery,
  useSearchArticlesQuery,
  useGetCategoryArticlesQuery,
} = apiSlice;
