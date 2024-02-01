import EditProfile from "@/components/EditProfile";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
const profile = () => {
  const [show,setShow]=useState(false)
  return (
    <Layout>
      <div className="min-h-[100vh] px-[15vw] py-[50px] bg-c1 relative">
        {show && <EditProfile setShow={setShow}></EditProfile> }
        <div className="">
          <div>
            <h1 className="text-3xl font-semibold">Aniket Patidar</h1>
            <p className="text-sm">aniketpatidar@gmail.com</p>

            <div
              className="flex items-center gap-2 text-sm"
              onClick={() => setShow(!show)}
            >
              <CiEdit />
              <p>Edit Profile</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row   md:items-center md:max-w-[60vw] gap-[20px] my-2">
            <div>
              <img
                src="./a.jpg"
                className="w-[170px] h-[160px] object-cover object-center"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-lg font-semibold">Introduction</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                nisi rerum cupiditate explicabo unde modi mollitia, omnis
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eligendi, fugiat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default profile;
