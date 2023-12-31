import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import HeaderTasks from "./HeaderTasks";
import TodaysTasks from "../Routes/TodaysTasks";
import ImportantTasks from "../Routes/ImportantTasks";
import DoneTasks from "../Routes/DoneTasks";
import SearchResults from "../Routes/SearchResults";
import Directory from "../Routes/Directory";

const TasksSection: React.FC = () => {
  return (
    <main className="pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
      <HeaderTasks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<TodaysTasks />} />
        <Route path="/important" element={<ImportantTasks />} />
        <Route
          path="/completed"
          element={<DoneTasks done={true} title="Completed tasks" />}
        />
        <Route
          path="/uncompleted"
          element={<DoneTasks done={false} title="Uncompleted tasks" />}
        />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/dir:/:dir" element={<Directory />} />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
