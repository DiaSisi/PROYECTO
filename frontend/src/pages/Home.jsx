import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSection1 from "../components/HomeSection1";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomeSection1 />
      <Footer />
    </div>
  );
};

export default Home;
