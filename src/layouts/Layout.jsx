import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <section>
      {/* navbar */}
      
      {/*  */}
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
