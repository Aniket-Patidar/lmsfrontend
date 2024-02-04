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
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);
  const dispatch = useDispatch();
  const { courses } = useSelector((e) => e.course);
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
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
