import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./index.css";

const App: React.FC = () => {
  return (
    <Layout>
      <div>
        <Outlet />
      </div>
    </Layout>
  );
};

export default App;
