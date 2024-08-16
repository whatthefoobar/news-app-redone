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
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import SingleNewsPage from "./pages/SingleNewsPage/SingleNewsPage";
import NavbarCategoryNewsPage from "./pages/NavbarCategoryNewsPage/NavbarCategoryNewsPage";
import SingleCategoryNewsPage from "./pages/SingleCategoryNewsPage/SingleCategoryNewsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import store from "./store";
import SingleSearchNews from "./pages/SingleSearchNews/SingleSearchNews";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="page/:page" element={<Home />} />
      <Route path="search/:keyword" element={<SearchPage />} />
      <Route path="search/:keyword/page/:page" element={<SearchPage />} />
      <Route
        path="search/:keyword/news/:newsId"
        element={<SingleSearchNews />}
      />
      <Route path="news/:newsId" element={<SingleNewsPage />} />
      {/* category news from navbar category */}
      <Route path="category/:category" element={<NavbarCategoryNewsPage />} />
      <Route
        path="category/:category/page/:page"
        element={<NavbarCategoryNewsPage />}
      />
      <Route
        path="category/:category/news/:newsId"
        element={<SingleCategoryNewsPage />}
      />
      <Route path="contact" element={<ContactPage />} />
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
