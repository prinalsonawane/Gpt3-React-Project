// import logo from "./logo.svg";
import React from "react";
import "./App1.css";
import {
  Footer,
  Blog,
  WhatGPT3,
  Features,
  Possibility,
  Header,
} from "./containers";
import { CTA, Brand, Navbar, Feature } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
