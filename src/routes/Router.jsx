import React from "react";
import {Route, Routes } from "react-router";
import Home from "../pages/public/Home";
import Layout from "../layouts/Layout";
import OurDepartments from "../pages/public/OurDepartments";
import Sectors from "../pages/public/Sectors";
import Services from "../pages/public/Services";
import OurProjects from "../pages/public/OurProjects";
import Nen from "../pages/public/Nen";
import Career from "../pages/public/Career";
import Gcard from "../pages/public/Gcard";
import AboutUs from "../pages/public/AboutUs";
import Resources from "../pages/public/Resources";
import Training from "../pages/public/Training";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
           <Route index element={<Home />}/>
           <Route path="our-deprtments" element={<OurDepartments />}/>
           <Route path="sector" element={<Sectors />}/>
           <Route path="services" element={<Services />}/>
           <Route path="about-us" element={<AboutUs/>} />
           <Route path="resources" element={<Resources/>} />
           <Route path="training" element={<Training/>} />
           <Route path="our-projects" element={<OurProjects />}/>
           <Route path="announcement" element={<Nen />}/>
           <Route path="career" element={<Career />}/>
           <Route path="g-card" element={<Gcard />}/>
      </Route>
    </Routes>
  );
};

export default Router;
