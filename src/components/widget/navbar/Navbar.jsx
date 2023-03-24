import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const routes = [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "User",
      path: "/user"
    },
    {
      label: "Event",
      path: "/event"
    }
  ];

  return (
    <div className="navbar">
      <div className="nav-container">
        {routes.map(({ label, path }) => (
          <NavLink to={path} key={path}>
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
