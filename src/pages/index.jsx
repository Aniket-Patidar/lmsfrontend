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
export default function Home() {
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);

  return (
    <div className="bg-c3  relative">
      <Navbar setSign={setSign} setLogin={setLogin} />
      <div className="relative">
        <Main></Main>
        {login && <Login></Login>}
        {sign && <SignIn></SignIn>}
      </div>

      <Ratings></Ratings>
      <Feature></Feature>
      <Courses></Courses>
      <GetStart></GetStart>
      <Footers></Footers>
    </div>
  );
}
