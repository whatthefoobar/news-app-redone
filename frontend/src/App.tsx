import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";

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
