import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
const Lesson = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex overflow-hidden h-[100vh] bg-[#101426] text-white">
      <div className="left w-[75%]  overflow-scroll border-r-2">
        <h1 className="capitalize bg-[#101426] text-white px-5 py-4 h-[50px] text-sm">
          MERN stack course by Aniket Sir
        </h1>
        <div
          className="video w-[full] bg-[#101426]"
          style={{ height: `calc(100vh - 50px)` }}
        >
          <video
            src="./lesson.mp4"
            controls
            className="w-full autoplay"
          ></video>

          <div className="px-[35px]">
            <p className="py-2 text-lg font-semibold">Ask Question</p>
            <input
              type="text"
              placeholder="ask questions...."
              className="w-full px-1 py-1 text-black outline-none rounded-md"
            />
            <div className="my-2">
              <h1>Q what is full form of HTML ?</h1>
              <p className="text-sm capitalize">
                ANS : HYPER TEXT MARKUP LANGUAGE
              </p>
            </div>
            <div className="my-2">
              <h1>Q what is full form of HTML ?</h1>
              <p className="text-sm capitalize">
                ANS : HYPER TEXT MARKUP LANGUAGE
              </p>
            </div>
            <div className="my-2">
              <h1>Q what is full form of HTML ?</h1>
              <p className="text-sm capitalize">
                ANS : HYPER TEXT MARKUP LANGUAGE
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="right w-[25%] bg-[#101426] py-2 ">
        <div className="px-[12px]">
          <h1 className="text-2xl">Syllabus</h1>
          <div className="w-full bg-white"></div>
          <div className="uppercase flex justify-between text-sm items-center py-4">
            <h1>course Analytcs</h1>
            <button className="uppercase font-extralight px-3 py-2 bg-[#B6F6DE] text-black rounded-lg">
              View Analytcs
            </button>
          </div>
          <div className="w-full h-[6px] bg-white mt-5 rounded-full ">
            <div className="w-[50%] rounded-full h-full bg-[#B6F6DE]"></div>
          </div>
        </div>

        <div className="h-[100vh] px-[12px] py-[30px] ">
          <div>
            <div
              className="bg-[#3B4053] cursor-pointer  flex items-center justify-between px-2 py-2"
              onClick={() => setShow(!show)}
            >
              <div className="flex gap-2 ">
                <p>01</p>
                <div>
                  <h1 className="capitalize">1-introduction</h1>
                  <p className="text-sm opacity-[.5]">323 lessons</p>
                </div>
              </div>
              <MdKeyboardArrowDown />
            </div>
            <div className={`${!show && "hidden"}`}>
              <div className="flex gap-2 px-[20px] cursor-pointer items-center my-2 ">
                <p className="w-[20px] h-[20px] rounded-full bg-[#B6F6DE] text-center">
                  <TiTickOutline className="text-black m-auto" />
                </p>
                <div>
                  <h1 className="capitalize text-sm">Module 1</h1>
                  <p className="text-sm opacity-[.5]">video 20m 2sec</p>
                </div>
              </div>
              <div className="flex gap-2 px-[20px] cursor-pointer items-center my-2 ">
                <p className="w-[20px] h-[20px] rounded-full bg-[#B6F6DE] text-center">
                  <TiTickOutline className="text-black m-auto" />
                </p>
                <div>
                  <h1 className="capitalize text-sm">Module 2</h1>
                  <p className="text-sm opacity-[.5]">video 20m 2sec</p>
                </div>
              </div>
              <div className="flex gap-2 px-[20px] cursor-pointer items-center my-2 ">
                <p className="w-[20px] h-[20px] rounded-full bg-[#B6F6DE] text-center">
                  <TiTickOutline className="text-black m-auto" />
                </p>
                <div>
                  <h1 className="capitalize text-sm">Module 3</h1>
                  <p className="text-sm opacity-[.5]">video 20m 2sec</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer items-center justify-between px-2 py-2">
            <div className="flex gap-2 ">
              <p>02</p>
              <div>
                <h1 className="capitalize">Java script</h1>
                <p className="text-sm opacity-[.5]">323 lessons</p>
              </div>
            </div>
            <MdKeyboardArrowDown />
          </div>
          <div className="flex cursor-pointer  items-center justify-between px-2 py-2">
            <div className="flex gap-2 ">
              <p>03</p>
              <div>
                <h1 className="capitalize">HTML</h1>
                <p className="text-sm opacity-[.5]">323 lessons</p>
              </div>
            </div>
            <MdKeyboardArrowDown />
          </div>
          <div className="flex cursor-pointer  items-center justify-between px-2 py-2">
            <div className="flex gap-2 ">
              <p>04</p>
              <div>
                <h1 className="capitalize">CSS</h1>
                <p className="text-sm opacity-[.5]">323 lessons</p>
              </div>
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
