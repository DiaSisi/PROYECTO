import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import SerendipityLogo from "./assets/img/logo.png";
import "./App.css";
import Welcome from "./pages/Welcome";
import Login from "./pages/LoginPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Clients from "./components/Clients";
// import Hero from "./components/Hero";
// import Works from "./components/Works";
// import Reviews from "./components/Reviews";
// import Services from "./components/Services";



function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );

  function App() {
    return (
      <div>
        <Header />
        <Hero />
        <Clients />
        <Works />
        <Reviews />
        <Services />
        <Footer />
      </div>
    );
  }
}

export default App;
