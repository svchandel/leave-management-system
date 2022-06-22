import './App.css';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import EmployeeLogin from './Components/EmployeeLogin';
import AdminLogin from './Components/AdminLogin.js'
import EmployeeHome from './Components/EmployeeHome'
import AdminHome from './Components/AdminHome'
import Pagenotfound from './Components/Pagenotfound';
import Maintenance from './Components/Maintenance';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        
        <Route exact path="/" component = {EmployeeHome} />
        <Route exact path="/employee-login" component = { EmployeeLogin} />
        <Route exact path="/admin-login" component = { AdminLogin} />
        <Route exact path="/admin-home" component = { AdminHome} />
        <Route exact path="/employee-home" component = { EmployeeHome} />
        <Route exact path="/maintenance" component={Maintenance} />
        <Route component={Pagenotfound}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
