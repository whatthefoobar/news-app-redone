import React from "react";
import "./App.css";
import PopularNews from "./components/PopularNews/PopularNews";
import Layout from "./components/Layout/Layout";
import HotNews from "./components/HotNews/HotNews";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Layout>
      <div className="news">
        <Outlet />
      </div>
    </Layout>
  );
};

export default App;
