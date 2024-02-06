import React from "react";
import { Chart } from "react-google-charts";
import { IoIosPeople, IoMdAddCircleOutline } from "react-icons/io";
import { MdWifiTetheringError } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";

export const data = [
  ["Year", "Sales",  "Profit"],
  ["Jan", 1000, 400],
  ["Feb", 1170, 460],
  ["March", 660, 1120],
  ["April", 1030, 540],
];

export const options = {
  chart: {
    title: "Earning",
    subtitle: "Sales Profit:2023",
  },
  colors: ["#20D489", "#DEF9ED"],
  chartArea: {
    width: '70%', // Adjust the width of the chart area
    height: '70%', // Adjust the height of the chart area
    top: 50, // Adjust top padding
    bottom: 50, // Adjust bottom padding
    left: 50, // Adjust left padding
    right: 500 ,// Adjust right padding
  }

};

const Analytics = () => {
  return (
    <div className="w-full h-full   font-serif  text-white font-semibold px-[10px] ">
      <h1 className="text-lg mb-5">Analytics </h1>
      <div className="flex flex-col items-center gap-[45px] ">
        <div className="flex justify-between w-full">
          <div className="max-w-[320px] bg-[#F1416C] px-[20px] py-[20px] rounded-md">
            <div className="flex items-center gap-1">
              <IoIosPeople className="text-6xl" />
              <div>
                <p>Total student</p>
                <p>5220</p>
              </div>
            </div>
            <div>
              <p>paid : 4240 student</p>
              <p>free : 980 student</p>
            </div>
            <div className="w-[280px] bg-[#763848] flex items-center justify-start  h-[8px] rounded-lg overflow-hidden mt-2">
              <span className="w-[200px] bg-white h-[8px]">m</span>
            </div>
          </div>

          <div className="max-w-[320px] bg-white text-black px-[20px] py-[20px] rounded-md">
            <div className="flex items-center gap-1">
              <IoMdAddCircleOutline className="text-6xl text-red-400" />
              <div>
                <p>New student</p>
                <p>5220</p>
              </div>
            </div>
            <div>
              <p>paid : 4240 student</p>
              <p>free : 980 student</p>
            </div>
            <div className="w-[280px] bg-[#dadada] flex items-center justify-start  h-[8px] rounded-lg overflow-hidden mt-2">
              <span className="w-[200px] bg-[#F1416C] h-[8px]">m</span>
            </div>
          </div>

          <div className="max-w-[320px] bg-white text-black px-[20px]  py-[20px] rounded-md">
            <div className="flex items-center gap-1">
              <RiStackLine className="text-6xl text-red-400" />
              <div>
                <p>Total Courses</p>
                <p>5220</p>
              </div>
            </div>
            <div>
              <p>paid : 4240 student</p>
              <p>free : 980 student</p>
            </div>
            <div className="w-[280px] bg-[#dadada] flex items-center justify-start  h-[8px] rounded-lg overflow-hidden mt-2">
              <span className="w-[200px] bg-[#F1416C] h-[8px]">m</span>
            </div>
          </div>
        </div>

        <div className="w-full text-black flex ">
          <Chart
            chartType="Bar"
            width="90%"
            height="400px"
            className="bg-[#20D489]"
            data={data}
            options={options}
          />

          <div className="w-[40%] bg-white h-[400px] px-5 py-4">
            <div className="font-lg py-2 flex justify-between ">
              <p>Recent Notification</p>
              <button className="px-3 py-1 rounded-lg bg-[#20d489e6]">
                View All
              </button>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <MdWifiTetheringError />
                <div>
                  <p>Message</p>
                  <p>20-01-2023 </p>
                </div>
              </div>
              <div className="w-full h-[2px] bg-gray-300"></div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <MdWifiTetheringError />
                <div>
                  <p>Message</p>
                  <p>20-01-2023 </p>
                </div>
              </div>
              <div className="w-full h-[2px] bg-gray-300"></div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <MdWifiTetheringError />
                <div>
                  <p>Message</p>
                  <p>20-01-2023 </p>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full h-[2px] bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <MdWifiTetheringError />
                <div>
                  <p>Message</p>
                  <p>20-01-2023 </p>
                </div>
              </div>
              <div className="w-full h-[2px] bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
