import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});

  useEffect(() => {
    setErr({});
  }, [email, password]);

  function handelLogin() {
    if (email === "" && password === "") {
      setErr({
        email: "please enter email",
        password: "please enter password",
      });
      return false;
    }
    if (email === "") {
      setErr({ ...err, email: "please enter email" });
      return false;
    }
    if (password === "") {
      setErr({ ...err, password: "please enter password" });
      return false;
    }
    if (password.length < 3) {
      setErr({ ...err, password: "password must be at least 3 characters" });
      return false;
    }
    if (email.length < 3) {
      setErr({ ...err, email: "please enter valid" });
      return false;
    }

    setErr({});
    setLogin(false);
    console.log({ email, password });
  }

  return (
    <div className="bg-white fixed px-[20px]  rounded-lg  py-[20px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <p className="font-semibold text-lg text-center my-2">Easy Learning</p>
      <button className="border-[.5px] whitespace-normal px-[70px] py-1 text-md  border-black flex items-center gap-2">
        <FaGoogle />
        <p className="whitespace-nowrap">Login With Google</p>
      </button>

      <div className="flex items-center justify-center">
        <span className="w-[40%] h-[1px] bg-c2"></span>
        <span className="-mt-[3px]">or</span>
        <span className="w-[40%] h-[1px] bg-c2"></span>
      </div>

      <div className="flex flex-col gap-[15px]">
        <div>
          <p className="font-semibold text-md">Email</p>
          <input
            type="text"
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
        <div>
          <p className="font-semibold text-md">Password</p>

          <input
            type="text"
            placeholder="Password..."
            className="border w-full px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          {err["password"] && (
            <p className="text-sm text-red-500">{err["password"]}</p>
          )}
        </div>
      </div>
      <div className="text-right my-2">
        <Link className="text-c1" href="#">
          Forgot password?
        </Link>
      </div>
      <button className="bg-blue-500 w-full py-2" onClick={handelLogin}>
        Login
      </button>
      <p className="text-sm mt-2">
        New to Easy Learning ?{" "}
        <span className="cursor-pointer text-blue-400">Register</span>
      </p>
    </div>
  );
};

export default Login;
