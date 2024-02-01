import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";



const EditProfile = ({setShow}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [err, setErr] = useState({});
  
    useEffect(() => {
      setErr({});
    }, [email, password, username]);
  
    function handelSubmit() {
      if (email === "" && password === "" && username == "") {
        setErr({
          email: "please enter email",
          password: "please enter password",
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
      setShow(false);
      console.log({ email, password, username });
    }

    

  return (
    <div className="bg-white w-[60vw] md:w-fit fixed px-[30px]  rounded-lg  py-[20px] top-[50%]   left-[50%] -translate-x-[50%] -translate-y-[50%]">
      {/* <p className="font-semibold text-lg text-center my-2">Edit Profile</p> */}
      <div className="flex items-center justify-center">
          <img src="./a.jpg" className="w-[100px] h-[100px] rounded-full" alt="" />
      </div>

    
      <div className="flex flex-col gap-[15px]">
        <div>
          <p className="font-semibold text-md">Username</p>
          <input
            type="text"
            placeholder="Username..."
            className="border w-full px-2 py-1"
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
   
      <button className="bg-blue-500 w-full py-2 mt-5" onClick={handelSubmit}>
        Submit
      </button>
     
    </div>
  )
}

export default EditProfile