import React from "react";
import { Routes, Route } from "react-router-dom";
import MentorsPage from "./pages/MentorsPage";
import TaskPage from "./pages/TaskPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MentorsPage />} />
      <Route path="/mentors" element={<MentorsPage />} />
      <Route path="/tasks" element={<TaskPage />} />
    </Routes>
  );
}
