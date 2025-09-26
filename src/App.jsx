import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import Match from "./components/MatchDetails";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MatchDetails/:id" element={<Match />} />
    </Routes>
  );
}

export default App;
