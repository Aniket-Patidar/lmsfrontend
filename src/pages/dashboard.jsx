import AdminLayout from "@/components/AdminLayout";
import MyImage from "@/components/LazyLoad";
import Loader from "@/components/Loader";
import { getUserJwt } from "@/redux/action/userAction";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import Link from "next/link";
import Profile from "@/components/Dashboard/Profile";
import Edit from "@/components/Dashboard/Edit";
import Create from "@/components/Dashboard/Create";
import Analytics from "@/components/Dashboard/Analytics";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Course from "@/components/Dashboard/Course";

const dashboard = () => {
  const {
    courses,
    loading: courseLoading,
    error,
  } = useSelector((e) => e.course);
  const { user, loading: userLoading } = useSelector((e) => e.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const [show, setShow] = useState("analytics");

  function err(error) {
    toast.error(error);
  }
  useEffect(() => {
    if (!user) {
      dispatch(getUserJwt());
    }
    if (user && user?.role != "admin") {
      router.replace("/");
    }
  }, [user]);

  return (
    <div className="flex w-[100vw] h-[100vh]">
      {/* {`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/${user?.avatar}`} */}
      {userLoading ? (
        <div className="w-full h-full bg-c2">
          <Loader></Loader>
        </div>
      ) : (
        <>
          {user && (
            <>
              <div className="h-[100vh] w-[300px] bg-c2 overscroll-y-none  text-c3 capitalize py-5">
                <div className=" flex flex-col items-center  relative ">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                    <MyImage
                      src={
                        user?.avatar
                          ? `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/${user.avatar}`
                          : "./placeholder.webp"
                      }
                      alt="admin"
                    />
                  </div>
                  <div>{user.name}</div>
                </div>

                <div className="px-[35px] py-[50px] flex flex-col gap-3">
                  <div
                    className="flex cursor-pointer items-center gap-2"
                    onClick={() => router.push("/profile")}
                  >
                    <CgProfile />
                    <p>Profile</p>
                  </div>
                  <div
                    className="flex cursor-pointer items-center gap-2"
                    onClick={() => setShow("create")}
                  >
                    <MdOutlineCreateNewFolder />
                    <p>create</p>
                  </div>
                  {/* <div
                    className="flex cursor-pointer items-center gap-2"
                    onClick={() => setShow("update")}
                  >
                    <CiEdit />
                    <p>update</p>
                  </div> */}

                  <div
                    className="flex cursor-pointer items-center gap-2"
                    onClick={() => setShow("course")}
                  >
                    <CiEdit />
                    <p>Course</p>
                  </div>
                  <div
                    className="flex cursor-pointer items-center gap-2"
                    onClick={() => setShow("analytics")}
                  >
                    <TbDeviceDesktopAnalytics />
                    <p>Analytics</p>
                  </div>

                  <Link href="/" className="absolute bottom-2">
                    Exit
                  </Link>
                </div>
              </div>
              <div className="w-full min-h-[100vh] overflow-y-scroll bg-[#657170] px-[20px] py-[20px]">
                {show == "profile" && <Profile></Profile>}
                {show == "create" && <Create err={err} setShow={setShow}></Create>}
                {show == "analytics" && <Analytics></Analytics>}
                {show == "course" && <Course err={err} user={user}></Course>}
              </div>
            </>
          )}
        </>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default dashboard;
