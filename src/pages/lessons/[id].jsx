import { getUserJwt } from "@/redux/action/userAction";
import { setCourses } from "@/redux/sclice/courseSclice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import Loader from "@/components/Loader";

import ReactPlayer from "react-player/youtube";
import MyImage from "@/components/LazyLoad";

// Only loads the YouTube player

const Lesson = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  let { id } = router.query;

  const {
    courses,
    course,
    error,
    loading: loading1,
  } = useSelector((e) => e.course);
  const { user, loading: loading2 } = useSelector((e) => e.user);
  const [video, setVideo] = useState(null);
  const [clickBg, setClickBg] = useState(null);

  /* TODO */
  const [CurrentCourses, setCurrentCourses] = useState(null);
  function getCurrentCourses() {
    const course = user?.courses.find((e) => e._id === id);
    setCurrentCourses(course);
  }

  useEffect(() => {
    dispatch(getUserJwt());
    getCurrentCourses();
  }, []);

  return (
    <div className="flex overflow-hidden h-[100vh] bg-[#101426] text-white">
      {!user || loading1 || loading2 ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loader></Loader>
        </div>
      ) : (
        <>
          {CurrentCourses && (
            <>
              <div className="left w-[75%]  overflow-scroll border-r-2">
                <h1 className="capitalize bg-[#101426] text-white px-5 py-4 h-[50px] text-sm flex items-center">
                  <span>
                    <IoIosArrowBack onClick={() => router.back()} />
                  </span>{" "}
                  {CurrentCourses.title}
                </h1>
                <div
                  className="video w-[full] bg-[#101426]"
                  style={{ height: `calc(100vh - 50px)` }}
                >
                  {video ? (
                    <video
                      src={`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${video}`}
                      controls
                      className="w-full object-cover  h-[100%]"
                    ></video>
                  ) : (
                    <div className="w-full h-[100%] flex items-center flex-col justify-center">
                      <MyImage
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${CurrentCourses.thumbnailPoster}`}
                      ></MyImage>
                      <p className="text-3xl">Let's start the course</p>
                    </div>
                  )}

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
                {CurrentCourses?.modules.map(
                  ({ description, title, videos, _id }, index) => {
                    return (
                      <div className="h-[100vh] px-[12px] py-[30px] " key={_id}>
                        <div>
                          <div
                            className="bg-[#3B4053] cursor-pointer  flex items-center justify-between px-2 py-2"
                            onClick={() => setShow(!show)}
                          >
                            <div className="flex gap-2 ">
                              <p>{index + 1}</p>
                              <div>
                                <h1 className="capitalize">{title}</h1>
                                <p>{description}</p>
                                <p className="text-sm opacity-[.5]">
                                  Module : {videos.length}
                                </p>
                              </div>
                            </div>
                            <MdKeyboardArrowDown />
                          </div>
                          <div className={`${!show && "hidden"}`}>
                            {videos.map(
                              ({
                                _id,
                                title,
                                description,
                                duration,
                                videoUrl,
                              }) => {
                                return (
                                  <div
                                    onClick={() => {
                                      setVideo(videoUrl);
                                      setClickBg(_id);
                                    }}
                                    className={`flex gap-2 px-[20px] cursor-pointer items-center my-2  ${
                                      clickBg === _id && "bg-blue-500"
                                    } `}
                                    key={_id}
                                  >
                                    <p className="w-[20px] h-[20px] rounded-full bg-[#B6F6DE] text-center">
                                      <TiTickOutline className="text-black m-auto" />
                                    </p>
                                    <div>
                                      <h1 className="capitalize text-sm">
                                        {title}
                                      </h1>
                                      <p className="text-sm opacity-[.5]">
                                        video {duration} munites
                                      </p>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Lesson;
