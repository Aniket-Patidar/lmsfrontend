import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const MyCourse = () => {
  return (
    <Layout color={"c2"}>
      <div className="bg-c2  min-h-[100vh]  text-white  px-[15px] py-[15px]">
        <div className="px-[15vw] py-[40px] flex flex-wrap items-center justify-center gap-[25px]">
          <div className="bg-c1 max-w-[300px] rounded-lg py-5 px-3">
            <img src="./2.png" alt="" />
            <h1>MERN stack Web Developer</h1>
            <div className="w-full h-[6px] bg-white mt-1 rounded-full ">
              <div className="w-[50%] rounded-full h-full bg-[#B6F6DE]"></div>
            </div>
            <div className="flex justify-between">
              <p>23 lessons</p>
              <p>12 hours</p>
            </div>
            <p className="text-sm opacity-[0.8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum eligendi numquam
            </p>
            <button className="border mt-2 px-3 py-1">
              {" "}
              <Link href="/lessons/1">Start Learning</Link>
            </button>
          </div>

          <div className="bg-c1 max-w-[300px] rounded-lg py-5 px-3">
            <img src="./2.png" alt="" />
            <h1>Java script</h1>
            <div className="w-full h-[6px] bg-white mt-1 rounded-full ">
              <div className="w-[50%] rounded-full h-full bg-[#B6F6DE]"></div>
            </div>
            <div className="flex justify-between">
              <p>23 lessons</p>
              <p>12 hours</p>
            </div>
            <p className="text-sm opacity-[0.8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum eligendi numquam
            </p>
            <button className="border mt-2 px-3 py-1">Start Learning</button>
          </div>

          <div className="bg-c1 max-w-[300px] rounded-lg py-5 px-3">
            <img src="./2.png" alt="" />
            <h1>English</h1>
            <div className="w-full h-[6px] bg-white mt-1 rounded-full ">
              <div className="w-[50%] rounded-full h-full bg-[#B6F6DE]"></div>
            </div>
            <div className="flex justify-between">
              <p>23 lessons</p>
              <p>12 hours</p>
            </div>
            <p className="text-sm opacity-[0.8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum eligendi numquam
            </p>
            <button className="border mt-2 px-3 py-1">Start Learning</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyCourse;
