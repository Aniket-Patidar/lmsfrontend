import Layout from "@/components/Layout";
import MyImage from "@/components/LazyLoad";
import Loader from "@/components/Loader";
import { getUserJwt } from "@/redux/action/userAction";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyCourse = () => {
  const { loading, error, user } = useSelector((e) => e.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(getUserJwt());
    }
  }, [user]);

  return (
    <Layout color={"c2"}>
      {loading && !user ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loader></Loader>
        </div>
      ) : (
        <div className="bg-c2  min-h-[100vh]  text-white  px-[15px] py-[15px]">
          <div className="px-[15vw] py-[40px] flex flex-wrap items-center justify-center gap-[25px]">
            {user?.courses.map(
              ({
                title,
                description,
                duration,
                category,
                level,
                tags,
                _id,
                thumbnailPoster,
              }) => {
                return (
                  <div
                    className="bg-c1 max-w-[300px] overflow-hidden rounded-lg py-5 px-3"
                    key={_id}
                  >
                    <MyImage
                      className={
                        "w-[340vw] h-[200px] object-cover object-center mx-auto "
                      }
                      src={`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${thumbnailPoster}`}
                      alt=""
                    />
                    <h1>{title}</h1>
                    <div className="w-full h-[6px] bg-white mt-1 rounded-full ">
                      <div className="w-[50%] rounded-full h-full bg-[#B6F6DE]"></div>
                    </div>
                    <div className="flex justify-between">
                      <p>23 lessons</p>
                      <p>{duration} hours</p>
                    </div>
                    <div className="text-[12px] capitalize">
                      <p className=" opacity-[0.8]">{description}</p>
                      <p className=" opacity-[0.8]">
                        <span>{level}</span> <span>{category}</span>{" "}
                      </p>
                      <p className=" opacity-[0.8]">
                        <span>{tags}</span>{" "}
                      </p>
                    </div>
                    <button className="border mt-2 px-3 py-1">
                      {" "}
                      <Link href={`/lessons/${_id}`}>Start Learning</Link>
                    </button>
                  </div>
                );
              }
            )}
          </div>
          ;
        </div>
      )}{" "}
    </Layout>
  );
};

export default MyCourse;
