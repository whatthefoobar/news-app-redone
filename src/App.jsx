import "./App.css";
import Header from "./components/Header/Header";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import HotNews from "./components/HotNews/HotNews";
import Navbar from "./components/Navbar/Navbar";
import PopularNews from "./components/PopularNews/PopularNews";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HeaderBar />
      <div className="news">
        <PopularNews />
        <HotNews />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
