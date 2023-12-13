import React, { useEffect, useState } from "react";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Directory: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const directories = useAppSelector((state) => state.tasks.directories);
  const params = useParams();
  const navigate = useNavigate();

  useDescriptionTitle(
    `Tasks in "${params.dir}"`,
    params.dir ? params.dir + " directory" : ""
  );

  const [tasksInCurrentDirectory, setTasksInCurrentDirectory] = useState<
    Task[]
  >([]);

  const dirParam = params.dir || "";

  useEffect(() => {
    const dirExists = directories.includes(dirParam);

    if (!dirExists) {
      navigate("/");
    }
    const tasksFiltered = tasks.filter((task: Task) => task.dir === dirParam);
    setTasksInCurrentDirectory(tasksFiltered);
  }, [directories, navigate, dirParam, tasks]);

  return (
    <LayoutRoutes
      title={`${dirParam}'s tasks`}
      tasks={tasksInCurrentDirectory}
    ></LayoutRoutes>
  );
};

export default Directory;
