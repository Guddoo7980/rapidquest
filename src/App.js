import React from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import ChallengeSection from "./components/ChallengeSection";
import Timeline from "./components/Timeline";
import Rules from "./components/Rules";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Tabs />
      <ChallengeSection />
      <Timeline />
      <Rules />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
