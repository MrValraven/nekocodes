import { useState } from "react";
import Hero from "./components/Hero/Hero";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
