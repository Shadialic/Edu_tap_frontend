import React, { useState } from "react";
import logo from "../../assets/images/logoO.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoutDetails from '../../Redux/userSlice/userSlice'

function Header() {
  const dispaatch=useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const navigate =useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const loginhandle=()=>{
    navigate("/login")
  }
  const handlelogout=()=>{
    {localStorage.removeItem('token')}
    dispaatch(logoutDetails({
      id:'',
      name:"",
      email:'',
      phone:'',

    }))
    navigate("/");

  }
  const nav_title = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/Courses",
      display: "Courses",
    },
    {
      path: "/about",
      display: "About Us",
    },
    {
      path: "/blog",
      display: "Blog ",
    },
  ];

  return (
    <div>
      <div className="flex">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" className="w-18 h-16 ml-3" />
          <h2 className="text-2xl font-prompt font-prompt-normal mt-2  text-[#000000]">
            Edu-tap
          </h2>
        </div>

        <div className="flex flex-row gap-10 absolute right-20 font-prompt">
          {nav_title.map((item) => (
            <h4
              className="font-prompt-normal hover:cursor-pointer mt-4 hover:text-[#7d0fc6]"
              key={item.display}
            >
              {item.display}
            </h4>
          ))}

          {(localStorage.getItem("token")? <button
             onClick={toggleDropdown}
             type="button"
             className="inline-flex justify-center mt-2 w-full sm:w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200"
           >
             User
           </button> : <button
             onClick={loginhandle}
             type="button"
             className="inline-flex justify-center mt-2 w-full sm:w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200"
           >
             Login
           </button> )}
           <div className="relative inline-block text-left justify-center items-center  sm:mt-2 ">
          
           {isOpen && (
             <div className="origin-top-left absolute left-0 mt-2 sm:mt-4 w-55 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
               <div
                 className="py-1"
                 role="menu"
                 aria-orientation="vertical"
                 aria-labelledby="options-menu"
               >
                 <a
                   href="#"
                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7d0fc6]"
                   role="menuitem"
                 >
                   Profile
                 </a>
                 <a
                   href="#"
                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7d0fc6]"
                   role="menuitem"onClick={handlelogout}
                 >
                   Logout
                 </a>
               </div>
             </div>
           )}
         </div>     
        </div>
      </div>
    </div>
  );
}

export default Header;