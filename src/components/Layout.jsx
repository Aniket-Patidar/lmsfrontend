import React, { useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footers";
import Login from "./Login";
import SignIn from "./SignIn";
import { useSelector } from "react-redux";
const Layout = ({ children, color }) => {
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);

  const {user} = useSelector(e.name)

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
