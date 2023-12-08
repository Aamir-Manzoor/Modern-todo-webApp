import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import HeaderTasks from "./HeaderTasks";

const TasksSection: React.FC = () => {
  return (
    <main className="pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
      <HeaderTasks/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
