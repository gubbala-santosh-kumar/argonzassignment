import React from "react";
import { Routes, Route } from "react-router-dom";
import MentorsPage from "./pages/MentorsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MentorsPage />} />
      {/* Add more pages/routes here */}
    </Routes>
  );
}
