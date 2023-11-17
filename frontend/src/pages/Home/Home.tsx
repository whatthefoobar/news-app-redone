import Layout from "../../components/Layout/Layout";
import PopularNews from "../../components/PopularNews/PopularNews";
import HotNews from "../../components/HotNews/HotNews";
import "./Home.css";

const Home = () => {
  return (
    <div className="news">
      <PopularNews />
      <HotNews />
    </div>
  );
};

export default Home;
