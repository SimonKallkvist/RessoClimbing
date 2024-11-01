import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Header />
      </div>
    </>
  );
};

export default App;
