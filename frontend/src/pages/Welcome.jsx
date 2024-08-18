import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import SerendipityLogo from "../assets/img/logo.png";
// import "./App.css";
// import LoginForm from "../components/LoginForm";
// import Hero from "../components/Hero";

function Welcome() {
  // const routes = Routes();
  const [error, setError] = useState("");

  return (
    <>
      <div>
        {/* <nav> <Link to="/login">Login</Link> </nav> */}
        <Link to="./login" target="_blank">
          <img src={SerendipityLogo} className="logo react align-center" alt="React logo" />
        </Link>
      </div>
      <h1 style={{ fontFamily: "Ribeye Marrow" }}>Serendipity</h1>
      <p className="read-the-docs">“Find the Unexpected”</p>
    </>
  );
}

export default Welcome;
