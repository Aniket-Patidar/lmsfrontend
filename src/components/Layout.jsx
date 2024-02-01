import React, { useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footers";
import Login from "./Login";
import SignIn from "./SignIn";
const Layout = ({ children, color }) => {
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);
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
