import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/SearchPage/SearchPage";
import SingleNewsPage from "./pages/SingleNewsPage/SingleNewsPage";
import { Provider } from "react-redux";
import store from "./store";
import NavbarPage from "./pages/NavbarPage/NavbarPage";
import SingleCategoryNewsPage from "./pages/SingleCategoryNewsPage/SingleCategoryNewsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="/news/:newsId" element={<SingleNewsPage />} />
      <Route path="/:category" element={<NavbarPage />} />
      <Route path="/:category/:newsId" element={<SingleCategoryNewsPage />} />
      {/* <Route path="/science" element={<NavbarPage />} />
      <Route path="/science/:newsId" element={<SingleCategoryNewsPage />} />
      <Route path="/world" element={<NavbarPage />} />
      <Route path="/world/:newsId" element={<SingleCategoryNewsPage />} />
      <Route path="/arts" element={<NavbarPage />} />
      <Route path="/arts/:newsId" element={<SingleCategoryNewsPage />} />
      <Route path="/books" element={<NavbarPage />} />
      <Route path="/books/:newsId" element={<SingleCategoryNewsPage />} />
      <Route path="/movies" element={<NavbarPage />} />
      <Route path="/movies/:newsId" element={<SingleCategoryNewsPage />} /> */}
      {/* <Route path="/business" element={<NavbarPage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
