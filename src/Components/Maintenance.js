import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import './admin.css'
function Maintenance() {
  const [leaveApplied, setLeaveApplied] = useState();
  useEffect(() => {
    axios.get('https://marketplaceb.herokuapp.com/api/getallleaves')
    .then((res) => {
      console.log("hi",res.data);
      setLeaveApplied(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <>
      <Navbar />
      <div style={{marginTop:'50px'}}>
        <h2>Leave Applied By Employees</h2>
        <table class="GeneratedTable">
          <thead>
            <tr>
              <th>EmpId</th>
              <th>leaveType</th>
              <th>leaveOption</th>
              <th>startDate</th>
              <th>endDate</th>
            </tr>
          </thead>
          <tbody>
            {leaveApplied &&
              leaveApplied.map((employee, index) => {
                return (
                  <tr key={index}>
                    <td>{employee.empId}</td>
                    <td>{employee.leaveType}</td>
                    <td>{employee.leaveOption}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.endDate}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div></>
  )
}

export default Maintenance