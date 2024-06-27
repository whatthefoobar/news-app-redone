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
import Search from "./pages/SearchPage/SearchPage";
import SingleNewsPage from "./pages/SingleNewsPage/SingleNewsPage";
import NavbarPage from "./pages/NavbarPage/NavbarPage";
import SingleCategoryNewsPage from "./pages/SingleCategoryNewsPage/SingleCategoryNewsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import store from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="page/:page" element={<Home />} />
      <Route path="search/:keyword" element={<Search />} />
      <Route path="news/:newsId" element={<SingleNewsPage />} />
      <Route path="category/:category" element={<NavbarPage />} />
      <Route path="category/:category/page/:page" element={<NavbarPage />} />
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
