import React from "react";
import "./App.css";
import PopularNews from "./components/PopularNews/PopularNews";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="news">
          <PopularNews />
          {/* <HotNews /> */}
        </div>
      </Layout>
    </>
  );
};

export default App;
