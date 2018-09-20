import React from "react";

//Stateless functional components

const NavBar = ({ totalCounters, totalIndexValues }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href={null}>
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        <span className="badge badge-pill badge-secondary pull-right m-4">
          {totalIndexValues}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
