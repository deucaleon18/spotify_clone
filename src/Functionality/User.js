import React,{useEffect} from 'react'
import {url} from "../Auth/stats"
 const User = () => {
 const getUser=async()=>{
   const access_token=localStorage.getItem('token')
  const results=await fetch(`${url}user/me&access_token=${access_token}`)
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