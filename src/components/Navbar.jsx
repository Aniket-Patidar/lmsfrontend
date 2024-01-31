import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
const Navbar = ({ setSign, setLogin, isLoggin ,color}) => {
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

  return (
    <>
      <div className={`flex justify-between font-semibold text-[18px] capitalize items-center text-lg hidden md:flex  bg-c1  py-[20px] px-[15vw]`}>
        <div className="flex gap-2 md:gap-[35px]">
          <Link href="#">Home</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Course</Link>
        </div>
        <img className="w-[140px]" src="./logo.png" alt="" />
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
            <CgProfile />
        )}
      </div>
      <div className="md:hidden text-[10px] flex  justify-between items-center h-fit font-semibold gap-1 px-2 bg-c1">
        <div className="flex items-center gap-2 h-fit">
          <img className="w-[70px] -mt-1" src="./logo.png" alt="" />
          <Link href="#">Home</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Course</Link>
        </div>
        {!isLoggin ? (
          <div className="flex gap-[4px] ">
            <button className="" onClick={handelLogin}>
              LogIn
            </button>
            <button
              className="bg-black text-white px-2 rounded-lg"
              onClick={handelSignUp}
            >
              SignUp
            </button>
            {/* <RxHamburgerMenu /> */}
          </div>
        ) : (
          <CgProfile />
        )}
      </div>
    </>
  );
};

export default Navbar;
