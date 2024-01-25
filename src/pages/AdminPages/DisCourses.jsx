import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import Navbar from "../../components/AdminComponents/Navbar";
import DisplayCourse from "../../components/AdminComponents/courseManage/showCourse/DisplayCourse";
function DisCourses() {
  return (
    <div>
      <Sidebar state={"disCourses"} />
      <Navbar state={"disCourses"} />
      <div className="mt-4 flex flex-col gap-12 p-4 xl:ml-80">
        <DisplayCourse/>
        
      </div>
    </div>
  );
}

export default DisCourses;
