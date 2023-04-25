import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const privSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className="h-[calc(100vh-80px) w-[100vw]">
      <div className="w-[300vw] flex relative duration-1000" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
        <img
          className="w-[100vw] h-[100vh] object-cover"
          src={data[0]}
          alt=""
        />
        <img
          className="w-[100vw] h-[100vh] object-cover"
          src={data[1]}
          alt=""
        />
        <img
          className="w-[100vw] h-[100vh] object-cover"
          src={data[2]}
          alt=""
        />
      </div>

      <div className="absolute w-[100px] left-0 right-0 m-auto bottom-24 flex gap-3">
        <div
          onClick={privSlide}
          className="w-[50px] h-[50px] border-2 flex items-center justify-center cursor-pointer"
        >
          <WestOutlinedIcon />
        </div>
        <div
          onClick={nextSlide}
          className="w-[50px] h-[50px] border-2 flex items-center justify-center cursor-pointer"
        >
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
