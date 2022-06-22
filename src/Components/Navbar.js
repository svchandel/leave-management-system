import React from "react";
import { Link } from "react-router-dom";
function Navbar({ addEmp }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark" style={{ height: "55px" }}>
        <div className="container">
          <span
            className="text-default fw-bold "
            style={{ fontSize: "25px", color: "whitesmoke" }}
          >
            <i className="fa fa-users  " /> Admin Dashboard
          </span>
          <Link to={"/admin-home"} className="btn btn-dark">
            <i className="fa fa-lock" /> logout
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
