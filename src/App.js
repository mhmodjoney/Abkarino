import React from "react";
import { Route, Routes } from "react-router-dom";

import Header1 from "./header"; // Import the Header component
import "./styles.css";
import MainCard from "./maincard";
import CoursePage from "./CoursePage";

export default function App() {
  return (
    <div className="App">
      <Header1 />
      <h1></h1>
      <Routes>
        <Route path="/" element={<MainCard />} />
        <Route path="/courses/:courseName" element={CoursePage} />
      </Routes>
    </div>
  );
}
