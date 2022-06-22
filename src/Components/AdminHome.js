import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark" style={{ height: "55px" }}>
        <div className="container">
          <span
            className="myStyle"
            style={{ fontSize: "25px", color: "whitesmoke" }}
          >
            <i className="fa fa-users " /> Leave Management System{" "}
          </span>
          <Link
            to={"/employee-home"}
            className="btn btn-secondary"
            style={{ opacity: "0.87", fontWeight: 700 }}
          >
            {" "}
            Employee login
          </Link>
        </div>
      </nav>

      <div className="container">
        <iframe
          className="gif"
          src="https://embed.lottiefiles.com/animation/9573"
          title="a2"
        ></iframe>
      </div>

      <div className="container2">
        <h1 className="login-text-header">Admin Login</h1>
        <br></br>
        <form>
          <div className="mb-4">
            <h5 style={{ display: "inline-block" }}>Admin:</h5>
            <input
              type="text"
              className="form-control"
              style={{ width: "80%", margin: "auto" }}
              placeholder="enter your admin Id"
              required
            />
          </div>
          <br></br>
          <div className="mb-4">
            <h5 style={{ display: "inline-block" }}>Password : </h5>
            <input
              type="password"
              className="form-control "
              style={{ width: "80%", margin: "auto" }}
              placeholder="enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <br></br>
            <Link to={"/admin-login"} className="btn btn-success">
              <i className=" fa fa-sign-in" /> Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
