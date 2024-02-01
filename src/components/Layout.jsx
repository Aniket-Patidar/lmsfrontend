import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footers";
import Login from "./Login";
import SignIn from "./SignIn";
import { useDispatch, useSelector } from "react-redux";
import { getUserJwt } from "@/redux/action/userAction";
import { useRouter } from "next/router";
const Layout = ({ children, color }) => {
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);
  const { user } = useSelector((e) => e.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getUserJwt());
    if (!user) {
      router.push("/");
    }
  }, []);
  

  return (
    <div className="relative">
      <Navbar setSign={setSign} color={color} setLogin={setLogin} />
      <main>{children}</main>
      {login && <Login setLogin={setLogin}></Login>}
      {sign && <SignIn setSign={setSign}></SignIn>}
    </div>
  );
};

export default Layout;
