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
import Search from "./pages/Search/Search";
import SingleNewsPage from "./pages/SingleNewsPage/SingleNewsPage";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="/news/:newsId" element={<SingleNewsPage />} />
      <Route path="/politics" element={<h1>Politics Page</h1>} />
      <Route path="/science" element={<h1>Science Page</h1>} />
      <Route path="/world" element={<h1>WorldPage</h1>} />
      <Route path="/arts" element={<h1>Arts Page</h1>} />
      <Route path="/books" element={<h1>Books Page</h1>} />
      <Route path="/movies" element={<h1>Movies Page</h1>} />
      <Route path="/business" element={<h1>Business Page</h1>} />
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
