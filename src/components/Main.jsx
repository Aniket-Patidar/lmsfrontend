import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <div className="main bg-c1 h-fit w-[100vw] px-5 pt-[10px] md:px-[120px] md:pt-[31px] overflow-hidden">
        <div className="flex flex-col gap-[20px] md:flex-row justify-evenly w-full mt-[50px] items-center">
          <div className="md:w-[50%]">
            <h1 className="font-extrabold md:font-semibold md:text-[4vw]">
              {" "}
              Improve your <br className="hidden md:inline" />{" "}
              <span className="bg-c2 px-3 font-serif capitalize items-center text-center inline-flex  w-fit rounded-full text-white">
                skills
              </span>{" "}
              fast
            </h1>
          </div>
          <div className="md:w-[30%] space-y-2 text-c2 ">
            <p>
              Hey I am <span className="font-serif font-semibold"> Aniket Patidar</span> Founder of Easy Learning
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate, voluptatibus ab eveniet ex ipsam quos.
              Iste adipisci at quaerat?
            </p>
            <button className="border-[1.5px] border-black md:px-4 md:py-2 px-2 py-1 rounded-full w-fit flex items-center gap-2">
              <p>Enroll Now</p>
              <FaArrowTrendUp />
            </button>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center mt-[10px] md:mt-0">
          <img src="./2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
