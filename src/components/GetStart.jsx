import React from "react";
import { TfiHandPointRight } from "react-icons/tfi";
import { FaArrowTrendUp } from "react-icons/fa6";
import MyImage from "./LazyLoad";

const GetStart = () => {
  return (
    <div>
      <div className="section6 py-[15px] px-5 pt-[10px] md:px-[15vw] md:pt-[31px] flex flex-col  md:flex-row items-center justify-center">
        <div className="md:w-[50%] w-full ">
          <h1 className="font-extrabold  md:inline-block md:font-semibold md:text-[3vw] capitalize text-center md:text-left text-4xl mb-2">
            its easy to start <br className="hidden md:inline" />
            <span className="text-c1 font-serif border border-c1 rounded-full px-2 py-1 md:border-0 md:px-0 md:py-0">
              Learning
            </span>
          </h1>

          <p className="opacity-[.8] text-md md:text-sm  md:w-1/2 mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            veniam aspernatur consequuntur quis deleniti accusantium eius
            repudiandae fugit adipisci quidem.
          </p>
          <ol>
            <li className="text-sm font-semibold flex items-center gap-1">
              <TfiHandPointRight />
              <span className="">Create Account</span>
            </li>
            <li className="text-sm font-semibold flex items-center gap-1">
              <TfiHandPointRight />
              <span>Purchase lesson</span>
            </li>
            <li className="text-sm font-semibold flex items-center gap-1">
              <TfiHandPointRight />
              <span>Start Learning</span>
            </li>
          </ol>
        </div>
        <div className="md:w-[50%] w-full">
          <MyImage src="./6.png" className="w-[55vw] md:w-[25vw] mx-auto " alt="" />
        </div>
      </div>

      <div className="section7  px-5  md:px-[15vw] md:pt-[31px] py-[20px]  h-fit">
        <div className="w-full  md:h-[300px] bg-c1 rounded-lg md:px-[40px] flex  flex-col md:flex-row items-center justify-center gap-[20px]">
          <img src="./7.png" className="h-[100%]" alt="" />
          <div className="px-[20px] md:px-0">
            <h1 className="capitalize text-4xl font-semibold">
              get ready to start
            </h1>
            <p className="w-[65%] opacity-[.5]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
              quasi
            </p>
            <button className="flex items-center justify-center gap-2 border px-2 py-1 rounded-full border-black bg-black text-c1 my-2">
              <p>Order Now </p>
              <FaArrowTrendUp></FaArrowTrendUp>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
