import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footers";
import Login from "./Login";
import SignIn from "./SignIn";
import { useDispatch, useSelector } from "react-redux";
import { getUserJwt } from "@/redux/action/userAction";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, color }) => {
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);
  const { user, error } = useSelector((e) => e.user);
  const dispatch = useDispatch();
  const router = useRouter();

  /* check user */

  useEffect(() => {
    if (!user) {
      dispatch(getUserJwt());
    }
  }, []);

  useEffect(() => {
    if (error != null) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="relative overflow-y-hidden">
      <Navbar setSign={setSign} color={color} setLogin={setLogin} />
      <main>{children}</main>
      {login && <Login setLogin={setLogin}></Login>}
      {sign && <SignIn setSign={setSign}></SignIn>}
      <ToastContainer />
    </div>
  );
};

export default Layout;
