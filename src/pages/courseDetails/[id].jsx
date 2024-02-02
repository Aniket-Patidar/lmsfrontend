import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { enrollCourse, fetchByIdCourse } from "@/redux/action/courseAction";
import { getUserJwt } from "@/redux/action/userAction";
import { setError } from "@/redux/sclice/userSclice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
const CourseDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { id } = router.query;
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { courses, course, error } = useSelector((e) => e.course);
  const { user } = useSelector((e) => e.user);
  useEffect(() => {
    dispatch(getUserJwt());

    if (!user) {
      dispatch(setError("please login"));
    }

    const isEnrolled = user?.courses.some((course) => course._id === id);
    setIsEnrolled(isEnrolled);
    dispatch(fetchByIdCourse(id));
  }, []);

  useEffect(() => {
    const isEnrolled = user?.courses.some((course) => course._id === id);
    dispatch(getUserJwt());
    setIsEnrolled(isEnrolled);
  }, [HandelBuyCourse]);

  function HandelBuyCourse() {
    if (isEnrolled) {
      router.push(`/lessons/${id}`);
      return;
    } else {
      dispatch(enrollCourse(id));
    }
    if (error) {
      dispatch(setError(error));
      return;
    }
  }

  return (
    <Layout color={"c3"}>
      <div className="bg-c3">
        <div className="bg-c3 flex gap-[5vw] flex-col md:flex-row  px-[15vw] items-start justify-between py-[50px] min-h-[100vh]">
          {course && (
            <>
              <div className=" md:w-[50%]">
                <h1 className="text-3xl capitalize  font-semibold">
                  {course.title}
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
                  <h1 className="text-2xl font-semibold my-2">
                    Course Details
                  </h1>
                  <p className="text-sm">{course.description}</p>
                  <p className="text-sm">{course.tags}</p>
                  <p className="text-sm">{course.category}</p>
                  <p className="text-sm">{course.level}</p>
                </div>
              </div>

              <div className="md:w-[50%]">
                <video
                  src={`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/${course.demoVideoUrl}`}
                  className="w-[100%] md:w-[400px]"
                  alt="aaa"
                />
                {!isEnrolled ? (
                  <>
                    {" "}
                    <div className="flex items-center font-semibold my-[10px] gap-2">
                      <p className="">{course.price}$</p>
                      <p>69% off</p>
                      <p>{course.duration} Minute</p>
                    </div>
                    <button
                      className="border border-red-300 px-4 py-2 rounded-full bg-red-500"
                      onClick={HandelBuyCourse}
                    >
                      Buy now $2220
                    </button>
                  </>
                ) : (
                  <button
                    className="border border-blue-600 px-4 py-2 mt-2 rounded-lg bg-blue-500"
                    onClick={HandelBuyCourse}
                  >
                    start learning
                  </button>
                )}
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
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetails;
