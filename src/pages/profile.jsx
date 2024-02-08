import EditProfile from "@/components/EditProfile";
import useUserAuthentication from "@/components/JwtHook";
import Layout from "@/components/Layout";
import MyImage from "@/components/LazyLoad";
import Loader from "@/components/Loader";
import { Avatar, getUserJwt } from "@/redux/action/userAction";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
const profile = () => {
  const [show, setShow] = useState(false);
  const { user, loading } = useSelector((e) => e.user);
  const ref = useRef();

  const dispatch = useDispatch();
  const router = useRouter();

  function handleChange(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(Avatar(formData));
    dispatch(getUserJwt());
  }

  function handelClickOnImage() {
    ref.current.click();
  }

  return (
    <Layout>
      {loading && (
        <div className="w-full min-h-[80vh] bg-c1 flex justify-center items-center">
          <Loader></Loader>
        </div>
      )}

      <div className="min-h-[100vh] px-[15vw] py-[50px] bg-c1 relative">
        {user && (
          <>
            <input
              className="hidden"
              name="avatar"
              ref={ref}
              onChange={handleChange}
              type="file"
            />

            {show && <EditProfile user={user} setShow={setShow}></EditProfile>}
            <div className="">
              <div>
                <h1 className="text-3xl font-semibold">{user?.name}</h1>
                <p className="text-sm">{user?.email}</p>

                <div
                  className="flex items-center gap-2 text-sm cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <CiEdit />
                  <p>Edit Profile</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row   md:items-center md:max-w-[60vw] gap-[20px] my-2">
                <div>
                  <img
                    onClick={handelClickOnImage}
                    src={
                      user?.avatar
                        ? `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/${user.avatar}`
                        : "./placeholder.webp"
                    }
                    className="w-[170px] h-[160px] object-cover object-center"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span className="text-lg font-semibold">Introduction</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsam nisi rerum cupiditate explicabo unde modi mollitia,
                    omnis
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
          </>
        )}
      </div>
    </Layout>
  );
};

export default profile;
