import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import meta from "../../assets/images/web.gif";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { userSignUp } from "../../api/userApi";
import { useDispatch } from "react-redux";
import { setUserDetailes } from "../../Redux/userSlice/userSlice";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    credential: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   const dispatch=useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (formData.name.trim() === '' || formData.name === undefined) {
        toast.error('Please enter your username');
      } else if (formData.phone.trim() === '') {
        toast.error('Please enter your phone number');
      } else if (formData.credential.trim() === '') {
        toast.error('Please enter your email');
      } else if (formData.password.trim() === '') {
        toast.error('Please enter your password');
      }else{
        const userData=await userSignUp({...formData})
        if(userData.data.status){
          dispatch(setUserDetailes({
            id:userData.data.saveUserData._id,
            name:userData.data.saveUserData.name,
            email:userData.data.saveUserData.credential,
            phone:userData.data.saveUserData.phone,
            is_Admin:userData.data.saveUserData.is_Admin,
          }))
          navigate('/login')
        }else{
          toast(userData.data.alert)
        }
      }

    }catch(err){
console.log(err);
    }
    
   
  };
  const [activeTab, setActiveTab] = useState("student");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "student") {
      navigate("/signup");
    } else if (tab === "vendor") {
      navigate("/vendor/signup");
    }
  };


  return (
    <>
      <div className="bg-authentication-background bg-cover bg-gray-100 flex justify-center items-center w-screen h-screen py-7 px-5">
        <div className="bg-white w-full sm:max-w-[80%] min-h-[100%] overflow-auto rounded-md flex justify-center items-center shadow-xl p-3 gap-5 flex-row">
          <div className="sm:w-1/2 w-full h-full flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-12 mb-1.5">
              <div
                className={`text-primary font-semibold text-[13px] cursor-pointer border-b border-primary px-3 py-0.5 ${
                  activeTab === "student" ? "active-tab" : ""
                }`}
                onClick={() => handleTabClick("student")}
              >
                STUDENT
              </div>
              <div
                className={`text-gray-400 text-[13px] font-semibold cursor-pointer ${
                  activeTab === "vendor" ? "active-tab" : ""
                }`}
                onClick={() => handleTabClick("vendor")}
              >
                Tutor
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center gap-3 px-5 py-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="name"
                        className="text-[14px] text-shadow-black"
                      >
                        Username
                      </label>
                      <div className="relative flex flex-col justify-center items-center">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="border p-2 text-[14px] w-[250px] sm:w-[280px] rounded-md outline-none shadow-md"
                          placeholder=" Enter an Name "
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="credential"
                        className="text-[14px] text-shadow-black"
                      >
                        Email
                      </label>
                      <div className="relative flex flex-col justify-center items-center">
                        <input
                          type="text"
                          name="credential"
                          id="credential"
                          className="border p-2 text-[14px] w-[250px] sm:w-[280px] rounded-md outline-none shadow-md"
                          placeholder=" Enter an Email "
                          value={formData.credential}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="phone"
                        className="text-[14px] text-shadow-black"
                      >
                        Phone
                      </label>
                      <div className="relative flex flex-col justify-center items-center">
                        <input
                          type="Number"
                          name="phone"
                          id="phone"
                          className="border p-2 text-[14px] w-[250px] sm:w-[280px] rounded-md outline-none shadow-md"
                          placeholder=" Enter an Number "
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col ">
                      <label
                        htmlFor="password"
                        className="text-[14px] text-shadow-black"
                      >
                        Password
                      </label>
                      <div>
                        <div className="relative flex items-center">
                          <input
                            type={!clicked ? "password" : "text"}
                            placeholder=" Enter a Password"
                            className="border p-2 text-[14px] w-[250px] sm:w-[280px] rounded-md outline-none shadow-md"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="cursor-pointer"
                            >
                              {!clicked ? (
                                <FaEyeSlash onClick={() => setClicked(false)} />
                              ) : (
                                <FaRegEye onClick={() => setClicked(true)} />
                              )}
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full h-fit justify-end items-center text-primary text-[13px] ">
                    <span className="w-fit h-fit cursor-pointer">
                      Forgot password?
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <button
                      className="bg-violet-600 h-8 rounded-md w-full flex justify-center items-center gap-2 text-white"
                      type="submit"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </form>
              <ToastContainer />

              <div className="text-[13px] text-gray-400 flex justify-center items-center gap-2">
                <div className="border w-10"></div>
                <div>Or Login with</div>
                <div className="border w-10"></div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-4">
                <div className="flex justify-center border items-center gap-5 rounded-md p-1 w-full shadow-md transition duration-500 hover:scale-105 cursor-pointer">
                  {/* Google Sign-In Button */}
                  <div className='style="height: 32px;'>
                    {/* Add your Google Sign-In button here */}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-primary text-[13px]">
              <div>
                <a href="/login">
                  Already have an account?
                  <span className="text-violet-600 text-lg ">Sign in</span>
                </a>
              </div>
            </div>
          </div>
          <div className="justify-center items-center text-center hidden lg:flex flex-col lg:w-1/2 relative">
            <div className="font-semibold text-lg w-full">
              <span className="font-bold text-4xl font-prompt-semibold">
                Edu-tap
              </span>
              {/* <h4 className="text-3xl ml-16">E-Learning Platform</h4> */}
              <img className="w-full rounded-md" src={meta} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
