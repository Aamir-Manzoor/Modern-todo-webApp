import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Links = [
  {
    name: "Today's tasks",
    path: "/today",
  },
  {
    name: "All tasks",
    path: "/",
  },
  {
    name: "Important tasks",
    path: "/important",
  },
  {
    name: "Completed tasks",
    path: "/completed",
  },
  {
    name: "Uncompleted tasks",
    path: "/uncompleted",
  }
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <ul>
        {Links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 ${
                currentPath === link.path ? classActive : " "
              }`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
