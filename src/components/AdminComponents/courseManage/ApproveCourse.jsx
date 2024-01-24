import React, { useEffect, useState } from "react";
import { manageCourse } from "../../../api/adminApi";

function ApproveCourse({ courseId, course, setCourse }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredData = course.filter((element) => element._id === courseId);
    console.log(filteredData, "element.id", courseId);
    setData(filteredData);
  }, [course, courseId]);
  const handlecourse=async (course_id)=>{
    console.log(course_id,'kyuiyu8iouyiyu');
    await manageCourse({_id:course_id}).then((res)=>{
      // toast()
      console.log(res);

    })
    
  }

  return (
    <>
      <div className="bg-authentication-background bg-cover bg-gray-100 flex justify-center w-screen h-screen py-3 px-3 ">
        <div className="bg-white w-full  sm:max-w-[70%] min-h-[85%] overflow-auto rounded-md flex flex-row items-start shadow-xl p-3 gap-5 ml-64 justify-start ">
          {data.map((element) => (
            <div key={element._id} className="mt-4 text-left w-[60%] shadow-sm">
              <h1 className="text-3xl font-bold ml-6 mt-4 mb-6 gap-10">
                {element.title}
              </h1>
              <div className="block font-sans text-base antialiased font-light leading-relaxed text-inherit ml-5">
                <p>{element.description}</p>
              </div>
            </div>
          ))}
          {data.map((element) => (
            <div
              key={element._id}
              className="flex flex-col w-[40%] h-px shadow-lg"
            >
              <div className="relative justify-center ">
                <img className="w-full h-64" src={element.image} />
              </div>
              <div className="relative bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20 mt-4">
                <h1>
                  Category:{" "}
                  <span className="text-left justify-end">
                    {element.category}
                  </span>
                </h1>
              </div>
              <div className="relative bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20 ">
                <h1>
                  Price:{" "}
                  <span className="text-left justify-end">{element.price}</span>
                </h1>
              </div>
              <div className="relative bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20 ">
                <h1>
                  payment:{" "}
                  <span className="text-left justify-end">
                    {element.payment}
                  </span>
                </h1>
              </div>
              <div className="relative bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20 ">
                <h1>
                  level:{" "}
                  <span className="text-left justify-end">{element.level}</span>
                </h1>
              </div>
              <div className="flex mt-5 ml-14 items-center">
                <div className="w-20 h-10 bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20 rounded-lg flex items-center justify-center transition duration-300  ">
                  <button onClick={()=>handlecourse(element._id)} className="text-white hover:bg-gray-500 w-full h-full">
                    Deny
                  </button>
                </div>
                <div className="ml-11 w-20 h-10 bg-gradient-to-tr from-lightBlue-950 to-lightBlue-800 text-white shadow-lightBlue-900/20 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-blue-gray-900 focus:bg-blue-gray-900">
                  <button  onClick={()=>handlecourse(element._id)}  className="text-white w-full h-full hover:hover:bg-gray-500">
                    Allow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ApproveCourse;
