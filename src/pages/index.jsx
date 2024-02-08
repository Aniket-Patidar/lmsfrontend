import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Main from "../components/Main";
import Ratings from "@/components/Ratings";
import Courses from "@/components/Courses";
import Feature from "@/components/Feature";
import GetStart from "@/components/GetStart";
import Footers from "@/components/Footers";
import { useEffect, useState } from "react";
import Login from "@/components/Login";
import SignIn from "@/components/SignIn";
import Layout from "@/components/Layout";
import { fetchCourses, getAllCourses } from "@/redux/action/courseAction";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const { courses } = useSelector((e) => e.course);

  useEffect(() => {
    !courses.length && dispatch(fetchCourses());
  }, []);

  return (
    <Layout color={"c1"}>
      <Main></Main>
      <Ratings></Ratings>
      <Feature></Feature>
      <Courses></Courses>
      <GetStart></GetStart>
      <Footers></Footers>
    </Layout>
  );
}
