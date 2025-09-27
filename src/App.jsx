import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import Match from "./components/MatchDetails";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/pointsTable" element={<PointsTable/>} />
      </Route>
      <Route path="/MatchDetails/:id" element={<Match />} />
    </Routes>
  );
}

export default App;
