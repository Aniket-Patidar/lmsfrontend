import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { FaArrowTrendUp } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });
import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
export default function Home() {
  return (
    <div className="min-h-100vh bg-c3">
      <div className=" bg-c1 h-fit w-[100vw] px-5 pt-[10px] md:px-[120px] md:pt-[31px] overflow-hidden">
        <Navbar />
        <div className="main">
          <div className="flex flex-col gap-[20px] md:flex-row justify-evenly w-full mt-[50px] items-center">
            <div className="md:w-[50%]">
              <h1 className="font-extrabold md:font-semibold md:text-[4vw]">
                {" "}
                Improve your <br className="hidden md:inline" />{" "}
                <span className="bg-c2 px-3 font-serif capitalize items-center text-center inline-flex  w-fit rounded-full text-white">
                  skills
                </span>{" "}
                fast
              </h1>
            </div>
            <div className="md:w-[30%] space-y-2 text-c2 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                similique qui itaque expedita porro, possimus accusantium
                eligendi mollitia nemo perspiciatis, libero illo illum
                voluptatem
              </p>
              <button className="border-[1.5px] border-black md:px-4 md:py-2 px-2 py-1 rounded-full w-fit flex items-center gap-2">
                <p>Enroll Now</p>
                <FaArrowTrendUp />
              </button>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center mt-[10px] md:mt-0">
            <img src="./2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="section-2 bg-c3 flex justify-evenly text-center md:px-[15vw] flex-wrap min-h-[200px] items-center font-semibold">
        <div>
          <h1>4.5</h1>
          <p>80k Reviews</p>
        </div>
        <span className="w-[1.5px] h-[30px] bg-c1 "></span>
        <div>
          <h1>30M</h1>
          <p>Enrollments</p>
        </div>
        <span className="w-[1.5px] h-[30px] bg-c1"></span>
        <div>
          <h1>2M</h1>
          <p>Learnings</p>
        </div>
        <span className="w-[1.5px] h-[30px] bg-c1"></span>
        <div>
          <h1>1k+</h1>
          <p>Popular Course</p>
        </div>
      </div>

      <div className="section3 bg-c4  py-[15px] flex flex-col md:flex-row  md:px-[15vw] items-center justify-center  gap-[8vw]">
        <h1 className="font-extrabold  md:font-semibold md:text-[3vw] text-center text-lg md:hidden ">
          we Provider <br className="hidden md:inline" />
          <span className="bg-c2 px-3 font-serif capitalize  text-lg text-center inline-flex items-center w-fit rounded-full text-white ">
            smart
          </span>
          online <br />
          education
        </h1>
        <div className="md:-[50%] flex items-center justify-end">
          <img src="./1.png" alt="" />
        </div>
        <div className="capitalize  md:w-[40%] md:pr-[0vw]">
          <h1 className="font-extrabold hidden md:inline-block md:font-semibold md:text-[3vw]">
            {" "}
            we Provider <br className="hidden md:inline" />{" "}
            <span className="bg-c2 px-3 font-serif capitalize py-0  text-center inline-flex items-center w-fit rounded-full text-white font-extralight">
              smart
            </span>{" "}
            online <br />
            education
          </h1>
          <p className="text-c2 px-2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            adipisci autem dolor voluptas harum ex perspiciatis similique
            repellendus, rerum maxime ullam iusto eligendi earum? Illo, ipsum
            temporibus! Vel, provident magnam?
          </p>
        </div>
      </div>

      <div className="section4 px-5 p-[10px] md:px-[15vw] md:pt-[31px] flex flex-wrap gap-[2vw]  items-center justify-center md:justify-start   bg-white">
        <div className="card w-[180px] h-[190px] p-[20px] md:w-[50%] md:h-[220px]  md:p-[40px] md:px-[20px] md:py-2     text-left text-white bg-c2 capitalize rounded-lg">
          <h1 className="md:text-[2vw] text-lg ">
            Our <span className="font-serif  text-c1">feature</span> <br />{" "}
            special for you
          </h1>
          <button className="md:text-[1vw] text-[8px] bg-c1 px-3 py-2 rounded-full mt-5 flex items-center gap-1 text-black">
            <span>See All feature</span>{" "}
            <span>
              <FaArrowTrendUp></FaArrowTrendUp>
            </span>
          </button>
        </div>

        <div className="card w-[180px] h-fit px-[20px] py-2  bg-c3">
          <img src="./i1.png" className="w-[72px] md:w-[100px] " alt="" />
          <p className="capitalize text-md font-semibold">get certificate</p>
          <p className="text-sm opacity-[.8]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            suscipit?
          </p>
        </div>

        <div className="card w-[180px] h-fit px-[20px] py-2  bg-c3">
          <img src="./i2.png" className="w-[72px] md:w-[100px] " alt="" />
          <p className="capitalize text-md font-semibold">get certificate</p>
          <p className="text-sm opacity-[.8]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            suscipit?
          </p>
        </div>

        <div className="card w-[180px] h-fit px-[20px] py-2  bg-c3">
          <img src="./i3.png" className="w-[72px] md:w-[100px] " alt="" />
          <p className="capitalize text-md font-semibold">get certificate</p>
          <p className="text-sm opacity-[.8]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            suscipit?
          </p>
        </div>

        <div className="card w-[180px] h-fit px-[20px] py-2  bg-c3">
          <img src="./i1.png" className="w-[72px] md:w-[100px] " alt="" />
          <p className="capitalize text-md font-semibold">get certificate</p>
          <p className="text-sm opacity-[.8]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            suscipit?
          </p>
        </div>
      </div>

      <div className="section5 bg-c2 min-h-[50vh]  py-[15px] px-5 pt-[10px] md:px-[120px] md:pt-[31px] text-white">
        <h1 className="text-center text-4xl capitalize mb-[20px]">
          Popular{" "}
          <span className="border-red-500 px-2 rounded-full text-center text-c1 font-serif w-fit">
            course
          </span>
        </h1>

        <div className="flex flex-col  md:flex-row justify-center gap-[2vw]">
          <div className="bg-[#dadada] mx-auto md:m-0 max-w-[300px]  text-black w-fit py-[15px] px-3 rounded-md">
            <img
              className="w-[35vw] md:w-[12vw] mx-auto"
              src="./3.png"
              alt=""
            />
            <div className="flex justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <FaStar className="text-c1" />
                <p>4.5</p>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="text-black" />
                <p> 02:33:45</p>
              </div>
            </div>

            <h1 className="text-md font-semibold ">Learn english Spoken</h1>
            <p className="text-sm opacity-[.5]">
              Lorem ipsum dolor sit amet ipsum dolor sit amet .
            </p>
            <button className="text-sm font-serif border border-black px-3 py-2 mt-5 rounded-full">
              View Course
            </button>
          </div>

          <div className="bg-[#dadada] mx-auto md:m-0 max-w-[300px]  text-black w-fit py-[15px] px-3 rounded-md">
            <img
              className="w-[35vw] md:w-[12vw] mx-auto"
              src="./4.png"
              alt=""
            />
              <div className="flex justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <FaStar className="text-c1" />
                <p>4.5</p>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="text-black" />
                <p> 02:33:45</p>
              </div>
            </div>


            <h1 className="text-md font-semibold ">Learn english Spoken</h1>
            <p className="text-sm opacity-[.5]">
              Lorem ipsum dolor sit amet ipsum dolor sit amet .
            </p>
            <button className="text-sm font-serif border border-black px-3 py-2 mt-5 rounded-full">
              View Course
            </button>
          </div>

          <div className="bg-[#dadada] mx-auto md:m-0 max-w-[300px]  text-black w-fit py-[15px] px-3 rounded-md">
            <img
              className="w-[35vw] md:w-[12vw] mx-auto"
              src="./5.png"
              alt=""
            />
                 <div className="flex justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <FaStar className="text-c1" />
                <p>4.5</p>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="text-black" />
                <p> 02:33:45</p>
              </div>
            </div>


            <h1 className="text-md font-semibold ">Learn english Spoken</h1>
            <p className="text-sm opacity-[.5]">
              Lorem ipsum dolor sit amet ipsum dolor sit amet .
            </p>
            <button className="text-sm font-serif border border-black px-3 py-2 mt-5 rounded-full">
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
