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
export default function Home() {
  return (
    <div className="bg-c3">
      <Navbar />
      <Main></Main>
      <Ratings></Ratings>
      <Feature></Feature>
      <Courses></Courses>
      <GetStart></GetStart>
      <Footers></Footers>
    </div>
  );
}
