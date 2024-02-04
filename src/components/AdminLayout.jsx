import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <div className="h-[100vh] w-[300px] bg-c1 overscroll-y-none"></div>
      <div >{children}</div>
    </div>
  );
};

export default AdminLayout;
