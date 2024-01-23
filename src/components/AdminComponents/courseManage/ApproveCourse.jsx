import React, { useEffect, useState } from "react";

function ApproveCourse({course,setCourse}) {
  const [data,setData]=useState(course)
  console.log(data,'pppp');
  
  return (
    <div>
   <div className="bg-authentication-background bg-cover bg-gray-100 flex justify-center items-center w-screen h-screen py-6 px-3">
  <div className="bg-white w-full sm:max-w-[70%] min-h-[80%] overflow-auto rounded-md flex flex-row items-start shadow-xl p-3 gap-5 ml-64 justify-start">

    {/* Left Content */}
      
    <div className="mb-8 text-left w-[60%] shadow-sm">

 
      <h1 className="text-3xl font-bold ml-6 mt-4 mb-6 gap-10">Title</h1>
      <div className="block font-sans text-base antialiased font-light leading-relaxed text-inherit ml-5">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
      </div>
    </div>

    {/* Right Content */}
    <div className="flex w-[40%] h-auto shadow-lg ">
      <img src="" alt="" />
      <h1>ddd</h1>
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
    </div>

  </div>
</div>

    </div>
  );
}

export default ApproveCourse;
