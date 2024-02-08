import React, { useEffect, useState } from "react";
import Modules from "./components/Module";
import Introduction from "./components/Introduction";
import Highlights from "./components/Highlights";
import Preview from "./components/Preview";
import { useDispatch, useSelector } from "react-redux";
import { createCourse, updateCourse } from "@/redux/action/courseAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Course from "./Course";

const Create = ({ err, isUpdate, course ,setShow}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "aniket",
    description: "patidar",
    instructor: "ap",
    price: 50,
    duration: 50,
    category: "Programming",
    level: "Beginner",
    tags: ["aniket"],
    thumbnailPoster: "/uploads/58642e744c2d0434097e5ab2.jpg",
    demoVideoUrl: "/uploads/lesson1.mp4",
    modules: [],
  });

  useEffect(() => {
    if (isUpdate) {
      setFormData({ ...formData, ...course });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handelPage = (elem) => {
    if (elem == "next" && currentPage < 2) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const {
    courses,
    loading: courseLoading,
    error,
  } = useSelector((e) => e.course);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateCourse(course._id, formData));
      if (!error) {
        toast.success("course updated successfully");
      }
    } else {
      dispatch(
        createCourse({ ...formData, createdBy: localStorage.getItem("id") })
      );

      if (!error) {
        toast.success("course Created successfully");
        setShow("course");
      }
    }
  };

  return (
    <div className="text-white w-full items-center overflow-auto">
      <h1 className="text-2xl font-semibold mb-3">
        {isUpdate ? "update Course" : "Create Course"}
      </h1>
      <div className="form">
        {currentPage == 1 && (
          <Introduction
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          ></Introduction>
        )}
        {currentPage == 2 && (
          <Modules formData={formData} setFormData={setFormData}></Modules>
        )}
      </div>

      <div className="flex gap-[35vw]">
        <p className="cursor-pointer" onClick={(e) => handelPage("prev")}>
          Prev
        </p>
        <p className="cursor-pointer" onClick={(e) => handelPage("next")}>
          Next
        </p>
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Create;
