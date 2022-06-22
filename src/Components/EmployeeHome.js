import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log(empId, password);
  }, [empId, password]);
  const data = {
    email: empId,
    password: password
  };
  const handleLogin = () => {
    axios
      .post("https://marketplaceb.herokuapp.com/api/loginemployee", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Login successful" && res.data.data != null) {
          localStorage.setItem("empDetails", JSON.stringify(res.data.data));
          window.location.href = "/employee-login";
        } else {
          toast.error("please enter valid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Credentials");
      });
  };
  return (
    <div>
      <Toaster />
      <nav className="navbar navbar-dark bg-dark" style={{ height: "55px" }}>
        <div className="container">
          <span
            className="myStyle"
            style={{ fontSize: "25px", color: "whitesmoke" }}
          >
            <i className="fa fa-users " /> Leave Management System{" "}
          </span>
          <Link
            to={"/admin-home"}
            className="btn btn-secondary"
            style={{ opacity: "0.87", fontWeight: 700 }}
          >
            {" "}
            Admin Login
          </Link>
        </div>
      </nav>

      <div className="container">
        <iframe
          src="https://embed.lottiefiles.com/animation/93794"
          className="gif"
          title="a4"
        ></iframe>
      </div>

      <div className="container2">
        <h1 className="login-text-header">Employee Login</h1>
        <br></br>
        <form>
          <div className="mb-4">
            <h5>Employee ID: </h5>
            <input
              type="text"
              className="form-control"
              style={{ width: "80%", margin: "auto" }}
              placeholder="enter your Employee Email"
              required
              onChange={(e) => setEmpId(e.target.value)}
            />
          </div>
          <br></br>
          <div className="mb-4">
            <h5>Password : </h5>
            <input
              type="password"
              className="form-control"
              style={{ width: "80%", margin: "auto" }}
              placeholder="enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div onClick={handleLogin} className="btn btn-success mb-4">
            <i className=" fa fa-sign-in" /> Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
