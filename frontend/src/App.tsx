import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
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
