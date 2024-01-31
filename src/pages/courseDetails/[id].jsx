import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
const CourseDetails = () => {
  return (
    <div className="bg-c3">
        <Link href="/" className="text-sm font-semibold px-5 ">Home</Link>
      <div className="bg-c3 flex gap-[5vw] flex-col md:flex-row  px-[15vw] items-start justify-between py-[50px] min-h-[100vh]">
        <div className=" md:w-[50%]">
          <h1 className="text-3xl capitalize  font-semibold">
            MERN Stack web dev course
          </h1>
          <div className="flex items-center text-sm">
            <p className="mr-2">Reviews </p>
            <RiStarSFill className="text-yellow-500" />
            <RiStarSFill className="text-yellow-500" />
            <RiStarSFill className="text-yellow-500" />
            <RiStarSFill className="text-yellow-500" />
          </div>

          <div className="my-[20px]">
            <h1 className="text-2xl font-semibold my-2">
              What you will learn from this course ?
            </h1>
            <div className="flex flex-col gap-[5px]">
              <p className="text-sm">
                <TiTickOutline className="inline-block" />
                Lorem ipsum dolor sit amet, consectetur adipisicing .
              </p>
              <p className="text-sm">
                <TiTickOutline className="inline-block" />
                Lorem ipsum dolor sit amet, consectetur adipisicing .
              </p>
              <p className="text-sm">
                <TiTickOutline className="inline-block" />
                Lorem ipsum dolor sit amet, consectetur adipisicing .
              </p>
            </div>
          </div>

          <div className="my-[20px]">
            <h1 className="text-2xl font-semibold my-2">
              What are the Prerequists for starting course ?
            </h1>
            <div className="flex flex-col gap-[5px]">
              <p className="text-sm">
                <TiTickOutline className="inline-block" />
                Lorem ipsum dolor sit amet, consectetur adipisicing .
              </p>
              <p className="text-sm">
                <TiTickOutline className="inline-block" />
                Lorem ipsum dolor sit amet, consectetur adipisicing .
              </p>
              <p className="text-sm">
                <TiTickOutline className="inline-block" />
                Lorem ipsum dolor sit amet, consectetur adipisicing .
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold my-2">Course Details</h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem ut cumque sed accusantium impedit consequuntur iusto
              natus labore repellat deleniti! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Enim saepe molestias dolore officia
              ipsum odit illum odio vero quaerat nam esse ut, delectus suscipit
              culpa exercitationem vitae? Ratione, facere exercitationem.
            </p>
          </div>
        </div>

        <div className="md:w-[50%]">
          <img src="/course.png" className="w-[100%] md:w-[400px]" alt="aaa" />

          <div className="flex items-center font-semibold my-[10px] gap-2">
            <p className="">2000$</p>
            <p>69% off</p>
          </div>
          <button className="border border-red-300 px-4 py-2 rounded-full bg-red-500">
            Buy now $2220
          </button>
          <p>
            <TiTickOutline className="inline-block" />
            keep learning
          </p>
          <p>
            <TiTickOutline className="inline-block" />
            keep learning
          </p>
          <p>
            <TiTickOutline className="inline-block" />
            keep learning
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
