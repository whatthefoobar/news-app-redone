import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="articles__container"></div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
