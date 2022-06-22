import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import axios from "axios";
const EmployeeLogin = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [usermodalIsOpen, setUserIsOpen] = useState(false);
  const [empId, setEmpId] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [leaveType, setLeaveType] = useState("fullday");
  const [leaveOption, setLeaveOption] = useState("sickLeave");
  const [localData, setLocalData] = useState();
  useEffect(() => {
    setStartDate(convert(date[0].startDate));
    setEndDate(convert(date[0].endDate));
  }, [date]);
  useEffect(() => {
    // get localstorage data
    let localData = localStorage.getItem("empDetails");
    if (localData) {
      setLocalData(JSON.parse(localData));
      console.log(JSON.parse(localData));
    }
    else {
      setLocalData(null);
    }
  }, []);
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  }
  const leaveData = {
    empId: empId,
    startDate: startDate,
    endDate: endDate,
    leaveType: leaveType,
    leaveOption: leaveOption,
  }
  const handleApplyLeave = () => {
    axios.post('https://marketplaceb.herokuapp.com/api/applyleave', leaveData)
      .then((res) => {
        console.log(res.data);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "auto",
      width: "800px",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function openModal1() {
    setUserIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function afterOpenModal1() {
    setUserIsOpen(false);
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary" style={{ height: "50px" }}>
        <div className="container">
          <span className="text-default fw-bold " style={{ fontSize: "25px" }}>
            <i className="fa fa-users text-dark " /> Employee Dashboard
          </span>
          <div onClick={openModal1} className="btn btn-warning">
            <i className="fa fa-user" /> update profile
          </div>
          <div className="btn btn-warning" onClick={openModal}>
            <i className="fa fa-calendar" /> apply for leave
          </div>
          <Link to={"/call-hr"} className="btn btn-warning">
            <i className="fa fa-phone-square" /> call to HR
          </Link>
          <Link to={"/employee-home"} className="btn btn-danger">
            <i className="fa fa-lock" /> logout
          </Link>
        </div>
      </nav>
      <div>
        <iframe
          src="https://embed.lottiefiles.com/animation/53968"
          className="gif2"
          title="a3"
        ></iframe>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>Apply Leave</h3>
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <input
                  type="text"
                  placeholder="EmpId"
                  value={localData.empId}
                  onChange={(e) => setEmpId(e.target.value)}
                ></input>
                <select onChange={(e) => setLeaveType(e.target.value)}>
                  <option value="fullDay">Full Day</option>
                  <option value="halfDay">Half Day</option>
                </select>
                <select onChange={(e) => setLeaveOption(e.target.value)}>
                  <option value="sickLeave">Sick Leave</option>
                  <option value="casualLeave">Casual Leave</option>
                  <option value="EarnedLeave">Earned Leave</option>
                </select>
              </div>
              <DateRangePicker
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="customDateSelect"
              />
            </div>
          </div>
        </div>
        <button className="btn btn-success" onClick={handleApplyLeave}>
          Apply
        </button>
      </Modal>
      {localData && 
      <Modal
        isOpen={usermodalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={afterOpenModal1}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <h3>User Details</h3>
      <div>
        <div>Name:{localData.name}</div>
        <div>Address:{localData.address}</div>
        <div>Phone:{localData.phone}</div>
        <div>Email:{localData.email}</div>
        <div>Designation:{localData.position}</div>
      </div>
      </Modal>
      }
    </React.Fragment>
  );
};

export default EmployeeLogin;
