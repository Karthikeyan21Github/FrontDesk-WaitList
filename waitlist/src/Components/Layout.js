import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      {/* <Sidebar /> */}
      <main className="bg-primary flex-1 p-4 text-black">{children}</main>
    </div>
  );
};

export default Layout;
