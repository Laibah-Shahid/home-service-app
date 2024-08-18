"use client"
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react'

function BusinessByCategory({params}) {

    const [businessLists,setBusinessLists]=useState([])

    useEffect(()=>{
        console.log(params);
        params&&getBusinessLists()
        
    },[params])

    const getBusinessLists=()=>{
        GlobalApi.getBusinessByCategory(params.category).then(resp=>{
            setBusinessLists(resp?.businessLists);
            
        })
    }
  return (
    <div>
        <BusinessList title={params.category}
        businessList={businessList}/>
    </div>
  )
}

export default BusinessByCategory