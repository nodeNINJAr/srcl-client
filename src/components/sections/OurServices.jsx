import React from 'react'
import ServicesSlider from '../slider/ServicesSlider'
import useServices from '../hooks/useServices'
import Heading from '../Heading';

const OurServices = () => {

    const [services] = useServices();

    //
  return (
    <div>
        <Heading title1={'Our'} title2={'services'}/>
        {/*  */}
        <ServicesSlider services={services}/>
    </div>
  )
}

export default OurServices