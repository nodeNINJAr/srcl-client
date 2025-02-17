import React from "react";
import axios from 'axios'
const useAxiosPublic = () => {
  const instance = axios.create({
    baseURL: "https://some-domain.com/api/",
  });

  return <div>useAxiosPublic</div>;
};

export default useAxiosPublic;
