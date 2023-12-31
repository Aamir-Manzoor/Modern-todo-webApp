import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import ContentDirectories from "./ContentDirectories";

const Directories: React.FC<{ classActive: string }> = ({ classActive }) => {
  const [isDirectoriesOpen, setIsDirectoriesOpen] = useState<boolean>(true);

  const toggleDirectoriesOpen = () => {
    setIsDirectoriesOpen((prevState) => !prevState);
  };
  return (
    <div className="py-4">
      <button
        onClick={toggleDirectoriesOpen}
        className={`flex items-center w-full mx-4 mb-2 ${
          isDirectoriesOpen ? "dark:text-slate-200" : " "
        }`}
      >
        <Arrow
        className={`w-3 h-3 mr-2 rotate-180 transition ${
            isDirectoriesOpen ? "" : "rotate-90 "
        }`}
        />
        Directories
      </button>
      <div className={isDirectoriesOpen ? "visible": "hidden"}>
        <ContentDirectories classActive={classActive} />
      </div>
    </div>
  );
};

export default Directories;
