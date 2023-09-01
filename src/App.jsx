import "./App.css";
import Header from "./components/Header/Header";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HeaderBar />
      <div className="articles__container"></div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
