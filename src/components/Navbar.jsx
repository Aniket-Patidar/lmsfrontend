import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUserJwt, logout } from "@/redux/action/userAction";
import useUserAuthentication from "./JwtHook";
import MyImage from "./LazyLoad";
const Navbar = ({ setSign, setLogin, color }) => {
  const { user } = useSelector((e) => e.user);

  function handelLogin() {
    setSign((e) => {
      if (e == true) {
        return false;
      } else {
        return e;
      }
    });
    setLogin((e) => !e);
  }

  useEffect(() => {
    /* TODO */
    dispatch(getUserJwt());
  }, []);

  function handelSignUp() {
    setLogin((e) => {
      if (e == true) {
        return false;
      } else {
        return e;
      }
    });
    setSign((e) => !e);
  }
  const [isLoggin, setIsLoggedIn] = useState(null);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("token"));
  }, [user]);

  const [show, setShow] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  function handelLogout() {
    localStorage.removeItem("token");
    dispatch(logout());
    router.reload();
  }

  return (
    <div className="relative">
      <div
        className={`flex justify-between font-semibold text-[18px] capitalize items-center text-lg hidden md:flex  bg-${
          color ? color : "c1"
        }  
        text-${color == "c2" ? "white" : "black"}  
        py-[20px] px-[15vw]`}
      >
        <div className="flex gap-2 md:gap-[35px]">
          <Link href="/">Home</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Course</Link>
        </div>
        <MyImage className="w-[140px]" src="./logo.png" alt="" />
        {!isLoggin ? (
          <div className="flex gap-[35px]">
            <button onClick={handelLogin}>Log In</button>
            <button
              className="bg-c2 text-white text-sm word md:py-2 md:px-4 rounded-full"
              onClick={handelSignUp}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {/* <CgProfile /> */}
            <Link href="/profile" className="cursor-pointer">
              profile
            </Link>
            <Link href="/mycourse" className="cursor-pointer">
              My Course
            </Link>
            {router.pathname == "/" && (
              <button
                className="bg-c2 text-white text-sm word md:py-3 md:px-4 rounded-full cursor-pointer"
                onClick={handelLogout}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>

      <div className="md:hidden text-[10px] flex  justify-between items-center h-fit font-semibold gap-1 px-2 bg-c1">
        <div className="flex items-center gap-2 h-fit">
          <MyImage className="w-[70px] -mt-1" src="./logo.png" alt="" />
          <Link href="/">Home</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Course</Link>
        </div>
        {!isLoggin ? (
          <div className="flex gap-[4px] py-2">
            <button className="" onClick={handelLogin}>
              LogIn
            </button>
            <button
              className="bg-black text-white px-2 py-1 rounded-lg"
              onClick={handelSignUp}
            >
              SignUp
            </button>
          </div>
        ) : (
          <>
            <div className="flex gap-2 text-md">
              <CgProfile />
              <RxHamburgerMenu onClick={() => setShow((e) => !e)} />
            </div>

            <div
              className={`md:hidden  ${
                show ? "block" : "hidden"
              } flex flex-col gap-[10px] text-left w-[100vw] px-5 py-[20px]  absolute top-[100%] bg-red-100 z-40  z-40 right-0`}
            >
              <Link href={"/profile"}>Profile</Link>
              <Link href={"/mycourse"}>My course</Link>
              <p>Logout</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
