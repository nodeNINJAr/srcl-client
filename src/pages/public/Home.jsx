import React from "react";
import WhoWeAreSection from "../../components/sections/WhoWeAreSection";
import OurServices from "../../components/sections/OurServices";
import OurLandmarkProjects from "../../components/sections/OurLandmarkProjects";
import OurPartnerShip from "../../components/sections/OurPartnerShip";
import HeroSlider from "../../components/slider/heroslider/HeroSlider";

const Home = () => {
  return (
    <div>
      <section>
         <HeroSlider/>
      </section>
      {/*  */}
      <section className="w-11/12 mx-auto pt-20">
         <WhoWeAreSection/>
      </section>
      {/* services */}
      <section className="pt-20 w-11/12 mx-auto">
         <OurServices/>
      </section>
       {/* landmark projects */}
       <section className="w-11/12 mx-auto">
         <OurLandmarkProjects/>
      </section>
      {/*  */}
      <section className="py-20 w-11/12 mx-auto">
         <OurPartnerShip/>
      </section>
    </div>
  );
};

export default Home;
