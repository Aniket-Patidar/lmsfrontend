import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between font-semibold text-[18px] capitalize items-center text-lg hidden md:flex">
        <div className="flex gap-2 md:gap-[35px]">
          <Link href="#">Home</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Course</Link>
        </div>
        <img className="w-[140px]" src="./logo.png" alt="" />
        <div className="flex gap-[35px]">
          <button>Log In</button>
          <button className="bg-c2 text-white text-sm word md:py-2 md:px-4 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
      <div className="md:hidden text-[10px] flex  justify-between items-center h-fit font-semibold gap-1 px-4">
        <div className="flex items-center gap-2 h-fit">
          <img className="w-[70px] -mt-1" src="./logo.png" alt="" />
          <Link href="#">Home</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Course</Link>
        </div>
        <div className="flex gap-[4px] hidden">
          <button>Log In</button>
          <button className="bg-c2 text-white text-sm  text-[12px] px-2 py-1 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
