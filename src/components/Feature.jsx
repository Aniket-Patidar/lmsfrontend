import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const Feature = () => {
  return (
    <div>
      <>
        <div className="section4 px-5 p-[10px] md:px-[15vw] md:pt-[31px] flex flex-wrap gap-[2vw]  items-center justify-center md:justify-start   bg-white">
          <div className="card w-[180px] h-[190px] p-[20px] md:w-[50%] md:h-[220px]  md:p-[40px] md:px-[20px] md:py-2     text-left text-white bg-c2 capitalize rounded-lg">
            <h1 className="md:text-[2vw] text-lg ">
              Our <span className="font-serif  text-c1">feature</span> <br />{" "}
              special for you
            </h1>
            <button className="md:text-[1vw] text-[8px] bg-c1 px-3 py-2 rounded-full mt-5 flex items-center gap-1 text-black">
              <span>See All feature</span>{" "}
              <span>
                <FaArrowTrendUp></FaArrowTrendUp>
              </span>
            </button>
          </div>

          <div className="card w-[180px] h-fit px-[20px] py-2  bg-c3">
            <img src="./i1.png" className="w-[72px] md:w-[100px] " alt="" />
            <p className="capitalize text-md font-semibold">get certificate</p>
            <p className="text-sm opacity-[.8]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, suscipit?
            </p>
          </div>

          <div className="card w-[180px] h-fit px-[20px] py-2  bg-c3">
            <img src="./i2.png" className="w-[72px] md:w-[100px] " alt="" />
            <p className="capitalize text-md font-semibold">get certificate</p>
            <p className="text-sm opacity-[.8]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, suscipit?
            </p>
          </div>

          <div className="card w-[180px] h-fit px-[20px] py-2  bg-c3">
            <img src="./i3.png" className="w-[72px] md:w-[100px] " alt="" />
            <p className="capitalize text-md font-semibold">get certificate</p>
            <p className="text-sm opacity-[.8]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, suscipit?
            </p>
          </div>

          <div className="card w-[180px] h-fit px-[20px] py-2  bg-c3">
            <img src="./i1.png" className="w-[72px] md:w-[100px] " alt="" />
            <p className="capitalize text-md font-semibold">get certificate</p>
            <p className="text-sm opacity-[.8]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, suscipit?
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Feature;
