import React, { useEffect } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import MyImage from "@/components/LazyLoad";
import Loader from "@/components/Loader";
import { fetchCourses } from "@/redux/action/courseAction";
import { getUserJwt } from "@/redux/action/userAction";
import { FaPlus } from "react-icons/fa6";

const allCourses = () => {
  const { courses, loading } = useSelector((e) => e.course);
  const { user } = useSelector((e) => e.user);
  const router = useRouter();
  const dispatch = useDispatch();


  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, []);
  function handelDets(id) {
    router.push(`/courseDetails/` + id);
  }

  return (
    <>
      {" "}
      <div className="section5 bg-c2 min-h-[100vh]  py-[15px] px-5 pt-[10px] md:px-[15vw] md:pt-[31px] text-white">
        <h1 className="text-center text-4xl capitalize mb-[20px]">
          Popular{" "}
          <span className="border border-c1 px-2 rounded-full text-center text-c1 font-serif w-fit">
            course
          </span>
        </h1>

        <div className="flex flex-col  md:flex-row justify-start gap-[2vw] flex-wrap">
          {loading && (
            <div className="w-full h-full flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}

          {/* {user?.role == "admin" && (
            <div className="bg-[#554a4a]  w-[300px] md:mx-[9px] text-black rounded-md flex justify-center items-center">
              <div className="w-[150px] h-[150px] border-[5px] rounded-full flex items-center justify-center text-white">
                <FaPlus
                  className="h-full w-full font-extralight"
                  onClick={() => router.push("/createCourse")}
                />
              </div>
            </div>
          )} */}

          {!loading &&
            courses &&
            courses.map(
              ({ title, description, _id, thumbnailPoster, duration ,rating}) => {
                return (
                  <div
                    key={_id}
                    className="bg-[#dadada] mx-auto md:m-0 max-w-[300px]  text-black w-fit py-[15px] px-3 rounded-md "
                  >
                    <MyImage
                      // className="w-[35vw] md:w-[15vw]   object-cover mx-auto"
                      className={
                        "w-[340vw] h-[200px] object-cover object-center mx-auto "
                      }
                      src={`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${thumbnailPoster}`}
                      alt={`${thumbnailPoster}`}
                    />
                    <div className="flex justify-between text-[10px]">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-c1" />
                        <p>{rating == 0 ? 2 : 4}</p>

                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-black" />
                        <p> {duration} Min</p>
                      </div>
                    </div>

                    <h1 className="text-md font-semibold ">{title}</h1>
                    <p className="text-sm opacity-[.5]">{description}</p>
                    <button
                      className="text-sm font-serif border border-black px-3 py-2 mt-5 rounded-lg ml-2"
                      onClick={() => handelDets(_id)}
                    >
                      View Course
                    </button>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </>
  );
};

export default allCourses;
