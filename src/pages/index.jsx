import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { FaArrowTrendUp } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-100vh bg-c3">
      <div className=" bg-c1 h-fit w-[100vw] px-5 pt-[10px] md:px-[120px] md:pt-[31px] overflow-hidden">
        <Navbar />
        {/* main */}
        <div className="main">
          <div className="flex flex-col gap-[20px] md:flex-row justify-evenly w-full mt-[50px] items-center">
            <div className="md:w-[50%]">
              <h1 className="font-extrabold md:font-semibold md:text-[4vw]">
                {" "}
                Improve your <br className="hidden md:inline" />{" "}
                <span className="bg-c2 px-3 font-serif capitalize py-0 items-center text-center inline-flex items-center w-fit rounded-full text-white font-extralight">
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

      <div className="section-2 bg-c3 flex justify-evenly text-center flex-wrap min-h-[200px] items-center font-semibold">
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

      <div className="section3 bg-c4  py-[15px] flex flex-col md:flex-row   items-center justify-center  gap-[3vw]">
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
        <div className="capitalize  md:w-[30%] md:pr-[0vw]">
          <h1 className="font-extrabold hidden md:inline-block md:font-semibold md:text-[3vw]">
            {" "}
            we Provider <br className="hidden md:inline" />{" "}
            <span className="bg-c2 px-3 font-serif capitalize py-0 items-center text-center inline-flex items-center w-fit rounded-full text-white font-extralight">
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
    </div>
  );
}
