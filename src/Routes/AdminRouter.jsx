import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminLoginPage from '../pages/AdminPages/AdminLoginPage'
import Dashboard from '../pages/AdminPages/Dashboard';
import Users from '../pages/AdminPages/Users';
import Tutors from '../pages/AdminPages/Tutors';

function AdminRouter() {
  return (
    <div>
      <Routes>
      <Route path="/" exact element={<AdminLoginPage/>} /> 
      <Route path="/dashboard" exact element={<Dashboard/>} /> 
      <Route path="/users" exact element={<Users/>} /> 
      <Route path="/tutors" exact element={<Tutors/>} /> 

      </Routes>
    </div>
  )
}

export default AdminRouter