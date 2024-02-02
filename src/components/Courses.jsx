import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Courses = () => {
  const { courses } = useSelector((e) => e.course);

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
          {courses &&
            courses.map(({ title, description,_id,thumbnailPoster ,duration}) => {
              return (
                <div key={_id} className="bg-[#dadada] mx-auto md:m-0 max-w-[300px]  text-black w-fit py-[15px] px-3 rounded-md">
                  <img
                    className="w-[35vw] md:w-[15vw]   object-cover mx-auto"
                    src={`http://localhost:3001${thumbnailPoster}`}
                    alt={`${thumbnailPoster}`}
                  />
                  <div className="flex justify-between text-[10px]">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-c1" />
                      <p>4.5</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-black" />
                      <p> {duration} Min</p>
                    </div>
                  </div>

                  <h1 className="text-md font-semibold ">{title}</h1>
                  <p className="text-sm opacity-[.5]">{description}</p>
                  <button
                    className="text-sm font-serif border border-black px-3 py-2 mt-5 rounded-full"
                    onClick={() => router.push(`/courseDetails/${_id}`)}
                  >
                    View Course
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Courses;
