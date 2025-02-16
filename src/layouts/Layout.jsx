import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Layout = () => {
  return (
    <div className="container mx-auto">
      {/* navbar */}
       <Navbar/>
      {/*  */}
      <main className="min-h-screen w-11/12 mx-auto">
        <Outlet />
      </main>
      {/* footer */}
       <Footer/>
    </div>
  );
};

export default Layout;
