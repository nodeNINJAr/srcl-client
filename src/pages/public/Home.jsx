import React from "react";
import WhoWeAreSection from "../../components/sections/WhoWeAreSection";
import OurServices from "../../components/sections/OurServices";
import OurLandmarkProjects from "../../components/sections/OurLandmarkProjects";
import OurPartnerShip from "../../components/sections/OurPartnerShip";

const Home = () => {
  return (
    <div>
      <section>
         <WhoWeAreSection/>
      </section>
      {/* services */}
      <section className="pt-20">
         <OurServices/>
      </section>
       {/* landmark projects */}
       <section className="">
         <OurLandmarkProjects/>
      </section>
      {/*  */}
      <section className="py-20">
         <OurPartnerShip/>
      </section>
    </div>
  );
};

export default Home;
