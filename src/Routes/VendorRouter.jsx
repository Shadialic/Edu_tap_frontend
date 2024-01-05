import React from 'react'
import { Route, Routes } from "react-router-dom";
import VendorSignUp from '../pages/vendorPages/VendorSignUp';
import VendorLogin from '../pages/vendorPages/VendorLogin';
import VendorHome from '../pages/vendorPages/VendorHome'
function VendorRouter() {
  return (
    <Routes>
        <Route path="/signup" exact element={<VendorSignUp/>} /> 
        <Route path="/login" exact element={<VendorLogin/>} /> 
        <Route path="/" exact element={<VendorHome/>} /> 


    </Routes>
  )
}

export default VendorRouter