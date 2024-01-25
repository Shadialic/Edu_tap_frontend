import React, { useEffect, useState } from 'react'
import { getCourse } from '../../../../api/adminApi';

function DisplayCourse() {
    const [course,setCourse]=useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await getCourse();
            const data = res.data.data;
            console.log(data,'ghfdh');
            setCourse(data);
          } catch (error) {
            console.error("Error fetching category data:", error);
          }
        };
        fetchData();
      }, []);
  return (
    <div>
        {course.map((item)=>{

        <div className="relative flex mb-6 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-64 max-h-80 justify-center items-center">
          <div className="relative mx-4 mb-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-60">
            {/* <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
              className="object-cover w-full h-full"
            /> */}{item.image}
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Natalie Paisley
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        })}
      </div>
    
  )
}

export default DisplayCourse