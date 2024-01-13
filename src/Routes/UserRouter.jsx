import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/userPages/Login";
import Home from "../pages/userPages/Home";
import Signup from "../pages/userPages/Signup";
import Otp from "../components/otp/Otp";

import UserPublic from "./UserPublic";
import UserLayout from "../pages/userPages/Layout";

function UserRouter() {
  return (
    <Routes>
      <Route>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/courses" component={Courses} />
        <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} /> */}
      </Route>
      <Route
        path="/login"
        element={
          <UserPublic>
            <Login />
          </UserPublic>
        }
      />
      <Route path="/otp" exact element={<Otp />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default UserRouter;
