import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { enrollCourse, fetchByIdCourse } from "@/redux/action/courseAction";
import { getUserJwt } from "@/redux/action/userAction";
import { setError } from "@/redux/sclice/userSclice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { id } = router.query;
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { courses, course, error, loading } = useSelector((e) => e.course);
  const { user } = useSelector((e) => e.user);

  useEffect(() => {
    if (id) {
      localStorage.setItem("currentID", id);
    }
  }, [id]);

  useEffect(() => {
    if (!user) dispatch(getUserJwt());
    const isEnrolled = user?.courses.some((course) => course._id === id);
    setIsEnrolled(isEnrolled);
    dispatch(fetchByIdCourse(localStorage.getItem("currentID")));
  }, []);

  useEffect(() => {
    if (error != undefined && error != null) {
    }
    if (error == "Unauthorized") {
      toast.error("Login  to axcess course");
    }
  }, [error]);

  /* Razor Pay */
  const paymentHandler = async (e) => {
    var amount = 500*60;
    var currency = "INR";
    var receiptId = "qwsaq1";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/course/order/${course._id}`,
      {
        method: "POST",
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_nygA3vR5xQffUJ",
      amount,
      currency,
      name: "Aniket Patidar",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/course/order/validate`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
              authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        name: "Aniket Patidar",
        email: "aniket@aniket.com",
        contact: "6266302210",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
    setIsEnrolled(true);
  };

  return (
    <Layout color={"c3"}>
      <div className="bg-c3">
        <div className="bg-c3 flex gap-[5vw] flex-col md:flex-row  px-[15vw] items-start justify-between py-[50px] min-h-[100vh]">
          {loading && (
            <div className="w-full h-full flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}

          {!loading && course && (
            <>
              <div className=" md:w-[50%]">
                <h1 className="text-3xl capitalize  font-semibold">
                  {course.title}
                </h1>
                <div className="flex items-center text-sm">
                  <p className="mr-2">Reviews </p>
                  <RiStarSFill className="text-yellow-500" />
                  <RiStarSFill className="text-yellow-500" />
                  <RiStarSFill className="text-yellow-500" />
                  <RiStarSFill className="text-yellow-500" />
                </div>

                <div className="my-[20px]">
                  <h1 className="text-2xl font-semibold my-2">
                    What you will learn from this course ?
                  </h1>
                  <div className="flex flex-col gap-[5px]">
                    <p className="text-sm">
                      <TiTickOutline className="inline-block" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing .
                    </p>
                    <p className="text-sm">
                      <TiTickOutline className="inline-block" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing .
                    </p>
                    <p className="text-sm">
                      <TiTickOutline className="inline-block" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing .
                    </p>
                  </div>
                </div>

                <div className="my-[20px]">
                  <h1 className="text-2xl font-semibold my-2">
                    What are the Prerequists for starting course ?
                  </h1>
                  <div className="flex flex-col gap-[5px]">
                    <p className="text-sm">
                      <TiTickOutline className="inline-block" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing .
                    </p>
                    <p className="text-sm">
                      <TiTickOutline className="inline-block" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing .
                    </p>
                    <p className="text-sm">
                      <TiTickOutline className="inline-block" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing .
                    </p>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl font-semibold my-2">
                    Course Details
                  </h1>
                  <p className="text-sm">{course.description}</p>
                  <p className="text-sm">{course.tags}</p>
                  <p className="text-sm">{course.category}</p>
                  <p className="text-sm">{course.level}</p>
                </div>
              </div>

              <div className="md:w-[50%]">
                <video
                  controls
                  autoPlay
                  muted="true"
                  src={`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}${course?.demoVideoUrl}`}
                  className="w-[100%] md:w-[400px]"
                  alt="aaa"
                />
                {!isEnrolled ? (
                  <>
                    <div className="flex items-center font-semibold my-[10px] gap-2">
                      <p className="">{course.price}$</p>
                      <p>69% off</p>
                      <p>{course.duration} Minute</p>
                    </div>
                    <button
                      className="border border-red-300 px-4 py-2 rounded-full bg-red-500"
                      onClick={paymentHandler}
                    >
                      Buy now $2220
                    </button>
                  </>
                ) : (
                  <button
                    className="border border-blue-600 px-4 py-2 mt-2 rounded-lg bg-blue-500"
                    onClick={() => router.push(`/lessons/${course._id}`)}
                  >
                    start learning
                  </button>
                )}
                <p>
                  <TiTickOutline className="inline-block" />
                  keep learning
                </p>
                <p>
                  <TiTickOutline className="inline-block" />
                  keep learning
                </p>
                <p>
                  <TiTickOutline className="inline-block" />
                  keep learning
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </Layout>
  );
};

export default CourseDetails;
