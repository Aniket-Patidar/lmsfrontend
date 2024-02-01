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
export default function Home() {
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);

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
