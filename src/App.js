import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Login/Login/Login";
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from "./components/AddDoctor/AddDoctor/AddDoctor";

function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
        </Route>
        <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
