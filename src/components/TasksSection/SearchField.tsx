import React, { useState, useEffect, useRef } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/search.svg";
import { Task } from "../../interfaces";
import useDate from "../hooks/useDate";
import useSearchQuery from "../hooks/useSearchQuery";
import useVisibility from "../hooks/useVisibility";

const ItemSearch: React.FC<{ task: Task }> = ({ task }) => {
  const dateFormated = useDate(task.date);
  return (
    <li key={task.id} className="py-2">
      <Link
        to={`/task/${task}`}
        className="flex justify-between transition hover:text-rose-500 dark:hover:text-slate-200"
      >
        <span>{task.title}</span>
        <span>{dateFormated}</span>
      </Link>
    </li>
  );
};

const SearchField: React.FC = () => {

  const navigate = useNavigate();


  const searchResultsRef = useRef<HTMLInputElement>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const matchedTasks = useSearchQuery(searchInputValue);


  const tasks = matchedTasks.slice(0,4);




  return <div>SearchField</div>;
};

export default SearchField;
