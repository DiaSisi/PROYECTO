import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import Hero from '../components/Hero';

const LoginPage = () => {
  // const routes = Routes();
  const [error, setError] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        // routes('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto p-4 mt-[15vh] w-1/2">
          <h1 className="text-2xl font-bold">Login Page</h1>
          {error && <p className="text-black-bold">{error}</p>}
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
