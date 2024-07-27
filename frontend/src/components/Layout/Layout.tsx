import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import HeaderBar from "../HeaderBar/HeaderBar";
// import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-paper ">
      <Navbar />
      <Header />
      <HeaderBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
