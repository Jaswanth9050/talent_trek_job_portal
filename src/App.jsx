import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Brands from './components/Brands';
import JobList from './pages/JobList';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Employee from './pages/Employee';
import Employee_Profile from './components/Employee_Profile';
import Employee_Home from './components/Employee_Home';
import Employee_Create_Jobs from './components/Employee_Create_Jobs';
import Employee_Posted_Jobs from './components/Employee_Posted_Jobs';
import Employee_Login from './pages/Employee_Login';
import Employee_Register_Form from './pages/Employee_Register_Form';
import PrivateRouter from './components/PrivateRouter';
import JobDetails from './pages/JobDetails';
import ErrorPage from './pages/ErrorPage';
import Employee_Setting from './components/Employee_Setting';
import Application from './pages/Application';

const App = () => {
  // Store logged-in employee here
  const [loggedInUser, setLoggedInUser] = useState(null);
  let navigate=useNavigate()
  const location=useLocation();
  console.log(location)



  // Employee_Login Authertication

  useEffect(()=>{
    let emp_logging_Authentication=localStorage.getItem("isemployerLoggedIN")==='true'; //it is converting the value to boolen
    console.log(emp_logging_Authentication)

    const publicRoutes=['/','/about','/contact','/signup','/login','/employee_register','/employee_login'];

    if(emp_logging_Authentication && publicRoutes.includes(location.pathname)){
      navigate('/employee')
    }

  },[location.pathname])
  
  //Student_Login Authertication




  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<ErrorPage />} />

        {/* PrivateRoute */}
      <Route
        path='/jobs'
        element={
          <PrivateRouter>
            <JobList />
          </PrivateRouter>
        }
      />
      <Route
        path='/jobs/:id'
        element={
          <PrivateRouter>
            <JobDetails />
          </PrivateRouter>
        }
      />
      <Route
        path='/jobs/:id/application_from'
        element={
          <PrivateRouter>
            <Application />
          </PrivateRouter>
        }
      />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        {/* Employee Register/Login */}
        <Route path='/employee_register' element={<Employee_Register_Form />} />
        <Route path='/employee_login' element={
          <Employee_Login setLoggedInUser={setLoggedInUser} />
        }/>

        {/* Employee Dashboard with nested routes */}
        <Route path='/employee' element={
          <Employee user={loggedInUser} />
        }>
          <Route index element={<Employee_Home />} />
          <Route path='profile' element={<Employee_Profile />} />
          <Route path='create_jobs' element={<Employee_Create_Jobs />} />
          <Route path='posted_jobs' element={<Employee_Posted_Jobs />} />
          <Route path='setting' element={<Employee_Setting />} />
          {/* <Route path='_login' element={<Employee_Login />} /> */}
        </Route>
        {/* <Route path='/employee/setting' element={<Employee_Setting/>}/> */}
      </Routes>
    </div>
  );
};

export default App;
