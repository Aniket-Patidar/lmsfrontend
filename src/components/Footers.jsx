import React from "react";

const Footers = () => {
  return (
    <div className="px-[10px] md:px-[15vw] text-white">
      <div className="bg-c2 p-[30px]  rounded-t-3xl flex flex-col md:flex-row justify-evenly gap-[50px]">
        <div className="md:w-[30%] h-full  flex flex-col  justify-between ">
          <div>
            <img src="./logo.png" className="w-[90px] mb-[20px]" alt="" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur Aniket patidar adipisicing
              elit. Tenetur temporibus magnam{" "}
            </p>
          </div>
          <p className="font-semibold text-md mt-[20px]">@2020 Aniket Patdar</p>
        </div>

        <div className="flex gap-[50px] items-center flex-wrap justify-start">
          <div>
            <h1 className="font-semibold text-lg">Company</h1>
            <p className="text-md opacity-[.5]">About As</p>
            <p className="text-md opacity-[.5]">Careers</p>
            <p className="text-md opacity-[.5]">Press kit</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Product</h1>
            <p className="text-md opacity-[.5]">About As</p>
            <p className="text-md opacity-[.5]">Careers</p>
            <p className="text-md opacity-[.5]">Press kit</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Resources</h1>
            <p className="text-md opacity-[.5]">About As</p>
            <p className="text-md opacity-[.5]">Careers</p>
            <p className="text-md opacity-[.5]">Press kit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
