import React from "react";
import Layout from "../../components/Layout/Layout";
import PopularNews from "../../components/PopularNews/PopularNews";
import HotNews from "../../components/HotNews/HotNews";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="news">
        <PopularNews />
        <HotNews />
      </div>
    </Layout>
  );
};

export default Home;
