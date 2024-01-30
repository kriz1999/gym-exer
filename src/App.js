/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import ExerciseDetail from "./pages/ExerciseDetail";
import { TextField } from "@mui/material";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/gym-exer" element={<Home></Home>} />
          <Route path="/exer" element={<Exercise></Exercise>} />

          <Route
            path="/ex-detail"
            element={<ExerciseDetail></ExerciseDetail>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
