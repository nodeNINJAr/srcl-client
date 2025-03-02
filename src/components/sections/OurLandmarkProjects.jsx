import React from "react";
import useOurProjects from "../hooks/useOurProjects";
import OurProjectsCard from "../card/OurProjectsCard";
import Heading from "../Heading";

const OurLandmarkProjects = () => {
  const [projects, isLoading] = useOurProjects();
  return (
    <>
      <Heading title1={'Our Landmark'} title2={'Projects'}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* card */}
        {projects?.slice(0,20).map((project) => (
          <OurProjectsCard key={project?.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default OurLandmarkProjects;
