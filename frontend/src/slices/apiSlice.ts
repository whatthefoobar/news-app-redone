import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IArticleSearchResponse,
  ICategoryArticles,
  IPopularNews,
} from "../../types/api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPopularArticles: builder.query<IPopularNews[], void>({
      query: () => "/api/popular",
    }),
    searchArticles: builder.query<IArticleSearchResponse, string>({
      query: (searchQuery) => `/api/articlesearch?q=${searchQuery}`,
    }),
    getCategoryArticles: builder.query<ICategoryArticles, string>({
      query: (section) => `/api/categories/${section}`,
    }),
  }),
});

export const {
  useGetPopularArticlesQuery,
  useSearchArticlesQuery,
  useGetCategoryArticlesQuery,
} = apiSlice;
