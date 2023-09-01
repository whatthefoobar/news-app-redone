import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="articles__container"></div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
