import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Client from "./components/Client";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Shop/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
