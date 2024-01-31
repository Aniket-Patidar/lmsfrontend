import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { useRouter } from "next/router";
const Courses = () => {
  const router = useRouter();
  return (
    <>
      {" "}
      <div className="section5 bg-c2 min-h-[50vh]  py-[15px] px-5 pt-[10px] md:px-[15vw] md:pt-[31px] text-white">
        <h1 className="text-center text-4xl capitalize mb-[20px]">
          Popular{" "}
          <span className="border border-c1 px-2 rounded-full text-center text-c1 font-serif w-fit">
            course
          </span>
        </h1>

        <div className="flex flex-col  md:flex-row justify-center gap-[2vw]">
          <div className="bg-[#dadada] mx-auto md:m-0 max-w-[300px]  text-black w-fit py-[15px] px-3 rounded-md">
            <img
              className="w-[35vw] md:w-[12vw] mx-auto"
              src="./3.png"
              alt=""
            />
            <div className="flex justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <FaStar className="text-c1" />
                <p>4.5</p>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="text-black" />
                <p> 02:33:45</p>
              </div>
            </div>

            <h1 className="text-md font-semibold ">Learn english Spoken</h1>
            <p className="text-sm opacity-[.5]">
              Lorem ipsum dolor sit amet ipsum dolor sit amet .
            </p>
            <button
              className="text-sm font-serif border border-black px-3 py-2 mt-5 rounded-full"
              onClick={() => router.push("/courseDetails/1")}
            >
              View Course
            </button>
          </div>

          <div className="bg-[#dadada] mx-auto md:m-0 max-w-[300px]  text-black w-fit py-[15px] px-3 rounded-md">
            <img
              className="w-[35vw] md:w-[12vw] mx-auto"
              src="./4.png"
              alt=""
            />
            <div className="flex justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <FaStar className="text-c1" />
                <p>4.5</p>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="text-black" />
                <p> 02:33:45</p>
              </div>
            </div>

            <h1 className="text-md font-semibold ">Learn english Spoken</h1>
            <p className="text-sm opacity-[.5]">
              Lorem ipsum dolor sit amet ipsum dolor sit amet .
            </p>
            <button
              onClick={() => router.push("/courseDetails/1")}
              className="text-sm font-serif border border-black px-3 py-2 mt-5 rounded-full"
            >
              View Course
            </button>
          </div>

          <div className="bg-[#dadada] mx-auto md:m-0 max-w-[300px]  text-black w-fit py-[15px] px-3 rounded-md">
            <img
              className="w-[35vw] md:w-[12vw] mx-auto"
              src="./5.png"
              alt=""
            />
            <div className="flex justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <FaStar className="text-c1" />
                <p>4.5</p>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="text-black" />
                <p> 02:33:45</p>
              </div>
            </div>

            <h1 className="text-md font-semibold ">Learn english Spoken</h1>
            <p className="text-sm opacity-[.5]">
              Lorem ipsum dolor sit amet ipsum dolor sit amet .
            </p>
            <button
              onClick={() => router.push("/courseDetails/1")}
              className="text-sm font-serif border border-black px-3 py-2 mt-5 rounded-full"
            >
              View Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
