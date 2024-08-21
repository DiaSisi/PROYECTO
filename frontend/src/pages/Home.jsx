import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <Footer />
    </div>
  );
};

export default Home;
