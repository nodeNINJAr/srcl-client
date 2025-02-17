import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import TopNavbar from "../components/shared/TopNavbar";


const Layout = () => {
  return (
    <div className="container mx-auto">
      {/* top navbar */}
        <TopNavbar/>
      {/* navbar */}
       <header className="sticky top-0 z-50"><Navbar/></header>
      {/*  */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* footer */}
       <Footer/>
    </div>
  );
};

export default Layout;
