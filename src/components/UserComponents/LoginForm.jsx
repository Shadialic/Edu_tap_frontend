import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { userLogin } from "../../api/userApi";
import { setUserDetailes } from "../../Redux/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import ForgetPass from "../../components/forgetPass/ForgetPass";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpn, setOpn] = useState(false);

  const [formData, setFormData] = useState({
    credential: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePassword = () => {
    setOpn(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (formData.credential === "") {
        toast("Please add email");
      } else if (formData.password === "") {
        toast("Please add password");
      } else {
        const loginResponse = await userLogin({
          credential: formData.credential,
          password: formData.password,
        });

        if (loginResponse.data && loginResponse.data.userData) {
          localStorage.setItem("token", loginResponse.data.token);
          dispatch(
            setUserDetailes({
              id: loginResponse.data.userData._id,
              name: loginResponse.data.userData.userName,
              phone: loginResponse.data.userData.mobile,
              is_Active: loginResponse.data.userData.is_Active,
              email: loginResponse.data.userData.credential,
              is_Admin: loginResponse.data.userData.is_Admin,
            })
          );
          navigate("/");
        } else {
          toast(loginResponse.data.alert);
        }
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className=" sm:max-w-[100%] min-h-[100%]  flex justify-center items-center p-3 gap-5 flex-row">
        {isOpn ? (
          <ForgetPass onClose={() => setOpn(false)} />
        ) : (
          <div className="sm:w-1/2 w-full h-full flex flex-col justify-center items-center">
            <h3 className="text-lg font-serif">Signin</h3>

            <div className="ml-10 ">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center gap-3 px-5 py-8">
                  <div className="flex flex-col gap-2">
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

                    <div className="flex flex-col ">
                      <label
                        htmlFor="password"
                        className="text-[14px] text-shadow-black"
                      >
                        Password
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type={clicked ? "password" : "text"}
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
                            {clicked ? (
                              <FaEyeSlash
                                onClick={() => setClicked(false)}
                              />
                            ) : (
                              <FaRegEye onClick={() => setClicked(true)} />
                            )}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full h-fit justify-end items-center text-primary text-[13px] ">
                    <span
                      className="w-fit h-fit cursor-pointer"
                      onClick={handlePassword}
                    >
                      Forgot password?
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <button
                      className="bg-violet-600 h-8 rounded-md w-full flex justify-center items-center gap-2 text-white"
                      type="submit"
                    >
                      Log in
                    </button>
                    {loading && (
                      <PropagateLoader className="mt-3" color="#8b44ef" />
                    )}
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
                  <div
                    style={{
                      height: "32px",
                      /* Add your Google Sign-In button here */
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="text-primary text-[13px]">
              <div>
                <a href="/signup">
                  Don't have an account?
                  <span className="text-violet-600 text-lg ">Sign up</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;