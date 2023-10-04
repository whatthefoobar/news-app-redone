import React from "react";
import "./App.css";
import PopularNews from "./components/PopularNews/PopularNews";
import Layout from "./components/Layout/Layout";
import HotNews from "./components/HotNews/HotNews";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="news">
          <PopularNews />
          <HotNews />
        </div>
      </Layout>
    </>
  );
};

export default App;
