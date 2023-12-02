import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";

const TasksSection: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
