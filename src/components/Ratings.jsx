import React from 'react'

const Ratings = () => {
  return (
    <>
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
    </>
  )
}

export default Ratings