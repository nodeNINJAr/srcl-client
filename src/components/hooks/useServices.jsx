import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const useServices = () => {

const {data:services=[] , isLoading, refetch } = useQuery({
    queryKey:['servicesData'],
    queryFn:async()=>{
      const {data}= await axios.get('/services.json');
      return data
    }
})

//
  return [services, isLoading,refetch]
}

export default useServices