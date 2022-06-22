import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import "./admin.css";
import Navbar from "./Navbar";
const EmployeeLogin = (addEmp) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [empId, setEmpId] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [employeeAllDetails, setEmployeeAllDetails] = useState("");
  let subtitle;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "auto",
      width: "800px"
    }
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const data = {
    name: name,
    password: password,
    email: email,
    empId: empId,
    address: address,
    phone: phone,
    dob: dob,
    position: designation,
    department: department
  };
  const handelAddEmployee = () => {
    axios
      .post("https://marketplaceb.herokuapp.com/api/addemployee", data)
      .then((res) => {
        closeModal();
        showAllEmployee();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    showAllEmployee();
  }, []);
  const showAllEmployee = () => {
    axios
      .get("https://marketplaceb.herokuapp.com/api/getallemployees")
      .then((res) => {
        console.log(res.data.data);
        setEmployeeAllDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <Navbar addEmp={openModal} />
      <div style={{ margin: "20px" }}>
        <div
          onClick={openModal}
          className="btn btn-outline-dark"
          style={{ marginRight: "15px" }}
        >
          <i className="fa fa-users" /> add employees
        </div>
        <Link
          to={"/apply-leave"}
          className="btn btn-outline-dark"
          style={{ marginRight: "15px" }}
        >
          <i className="fa fa-user-circle" /> employee information
        </Link>
        <Link
          to={"/maintenance"}
          className="btn btn-outline-dark"
          style={{ marginRight: "15px" }}
        >
          <i className="fa fa-map-pin" /> maintenance
        </Link>
      </div>
      <div>
        <table class="GeneratedTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>EmpId</th>
              <th>Dept.</th>
              <th>Position</th>
              <th>Phone</th>
              <th>Address</th>
              <th>D.O.B</th>
            </tr>
          </thead>
          <tbody>
            {employeeAllDetails &&
              employeeAllDetails.map((employee, index) => {
                return (
                  <tr key={index}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.empId}</td>
                    <td>{employee.department}</td>
                    <td>{employee.position}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.address}</td>
                    <td>{employee.dob}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 style={{ textAlign: "center", fontWeight: 700 }}>Add Employee</h3>
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="number"
              placeholder="EmpId"
              onChange={(e) => setEmpId(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Department"
              onChange={(e) => setDepartment(e.target.value)}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <input
              type="text"
              placeholder="Position"
              onChange={(e) => setDesignation(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="number"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <input
              type="date"
              placeholder="DOB"
              onChange={(e) => setDob(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="btn btn-success" onClick={handelAddEmployee}>
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default EmployeeLogin;
