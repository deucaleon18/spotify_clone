import React,{useEffect} from 'react'
import {url} from "../Auth/stats"
 const User = () => {
 const getUser=async()=>{
  const results=await fetch(`${url}user/me`)
  const data=await results.json()
  console.log(data);
 }

 useEffect(() => {
     getUser()
     
 }, [])

    return (
        <div>
            
        </div>
    )
}

export default User;