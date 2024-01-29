import React, { useEffect, useState } from "react";
import { getCourse } from "../../../api/userApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Select, Option } from "@material-tailwind/react";
import TextField from "@mui/material/TextField";
function DisCourse() {
  const [category, setCategory] = useState([]);
  const [course, setCourse] = useState([]);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCourse().then((res) => {
        console.log(res, "ssaasa");
        const categories = res.data.category;
        const data = res.data.CourseData;
        console.log(data);
        setCategory(categories);
        setCourse(data);
      });
    };
    fetchData();
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  return (
    <div className="flex flex-row">
      <div className="w-[25%] lg:w-2/7 flex flex-col h-full lg:gap-1 mt-3">
        <div className="w-full h-fit flex items-center justify-center bg-white p-3 mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          category
        </div>
        <div className="w-full h-full flex flex-col items-center overflow-y-auto px-5">
          {category.map((item) => (
            <div
              key={item.id}
              className="my-2 text-[14px] p-1 w-full justify-center flex transition duration-500 hover:scale-105 cursor-pointer font-prompt border-gray hover:shadow-lg hover:text-violet-600"
            >
              <p>{item.categoryName}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-col gap-5 w-[75%] h-auto mt-5">
        <div className="text-3xl font-prompt">
          <strong>Explore The Course</strong>
        </div>
        <div className="flex justify-end items-end mr-10">
          <button className="w-[15%] h-10 bg-[#7b229b] text-white shadow-lg rounded-md font-prompt">Your Enroolens</button>
        </div>
        <h1 className="text-xl  font-prompt ml-4">Most Populer Course</h1>
        <div className="flex-row ml-10  gap-8">
          <Slider
            {...settings}
            className="custom-slick-slider"
            style={{ marginRight: "10px" }}
          >
            {course.map((item) => (
              <div
                className="flex w-[30%] h-36 shadow-md bg-blue-gray-300 border-4 gap-4 ml-4"
                key={item.id}
                style={{ marginRight: "20px" }}
              >
                <div className="flex w-full h-full bg-[#7b229b] justify-center items-center rounded-2xl">
                  <div className="flex flex-col justify-center items-center w-[78%] h-[70%] bg-white rounded-md shadow-md">
                    <p className="ml-2 text-base font-prompt-semibold mb-2">
                      {item.title}
                    </p>
                    <div className="flex flex-col justify-end items-center w-[70%] h-full">
                      {/* <img src={item.image} className="w-24 h-16 " alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      
        <div className="flex gap-3 relative">
  <div className="flex w-60 flex-col h-36 gap-6 mt-4">
    <Select color="purple" label="Payment">
      <Option>Free</Option>
      <Option>Premium</Option>
    </Select>
  </div>

  <div className="flex w-60 flex-col h-36 gap-6 mt-4">
    <Select color="purple" label="Level">
      <Option>Beginner</Option>
      <Option>Intermediate</Option>
      <Option>Advanced</Option>
    </Select>
  </div>

  <div className="search mt-4 w-[45%] h-12">
  <TextField
    className=''
    id="outlined-basic"
    onChange={inputHandler}
    variant="outlined"
    fullWidth
    label="Search"
  />
</div>

    {/* <List input={inputText} /> */}

</div>







      </div>
    </div>
  );
}

export default DisCourse;
