import { Avatar, updateProfile } from "@/redux/action/userAction";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = ({ setShow, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [err, setErr] = useState({});
  const dispatch = useDispatch();
  const ref = useRef();
  const { error } = useSelector((e) => e.user);

  useEffect(() => {
    setErr({});
  }, [email, password, username]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setUsername(user.name);
    }
  }, [user]);

  function handleChange(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(Avatar(formData));
  }

  function handelClickOnImage() {
    ref.current.click();
  }

  function handelSubmit() {
    if (email === "" && username == "") {
      setErr({
        email: "please enter email",
        username: "please enter username",
      });
      return false;
    }
    if (username === "") {
      setErr({ ...err, email: "please enter username" });
      return false;
    }
    if (email === "") {
      setErr({ ...err, email: "please enter email" });
      return false;
    }

    if (email.length < 3) {
      setErr({ ...err, email: "please enter valid" });
      return false;
    }

    setErr({});
    dispatch(updateProfile({ name: username, email }));
    if (error) {
      alert(error);
      return;
    }
    setShow(false);
  }

  return (
    <div className="bg-white w-[60vw] md:w-fit fixed px-[30px]  rounded-lg  py-[20px] top-[50%]   left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <input
        className="hidden"
        name="avatar"
        ref={ref}
        onChange={handleChange}
        type="file"
      />

      <div className="flex items-center justify-center">
        <div onClick={handelClickOnImage}>
          <MyImage
            src={
              user?.avatar
                ? `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/${user.avatar}`
                : "./a.jpg"
            }
            className="w-[100px] h-[100px] rounded-full"
            alt="avatar"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[15px]">
        <div>
          <p className="font-semibold text-md">Username</p>
          <input
            type="text"
            placeholder="Username..."
            className="border w-full px-2 py-1"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {err["username"] && (
            <p className="text-sm text-red-500">{err["username"]}</p>
          )}
        </div>

        <div>
          <p className="font-semibold text-md">Email</p>
          <input
            type="text"
            value={email}
            placeholder="please enter your email id"
            className="border w-full px-2 py-1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {err["email"] && (
            <p className="text-sm text-red-500">{err["email"]}</p>
          )}
        </div>
        {/*  <div>
          <p className="font-semibold text-md">Password</p>
          <input
            type="text"
            value={password}
            placeholder="Password..."
            className="border w-full px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          {err["password"] && (
            <p className="text-sm text-red-500">{err["password"]}</p>
          )}
        </div> */}
      </div>

      <button className="bg-blue-500 w-full py-2 mt-5" onClick={handelSubmit}>
        Submit
      </button>
    </div>
  );
};

export default EditProfile;
