import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
 
const data = useLoaderData()
//for optimization using another method
    // const [data,setData] = useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/FarheenMalak')
//     .then(response => response.json())
//     .then(data=> setData(data))

// },[])

  return (
    <div className='bg-gray-600 text-center m-4 p-4 text-white text-3xl'>Github Followers: {data.followers}
    <img className='mx-auto rounded-[50%] my-4' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

 export const githubInfoLoader =async () =>{
    const response = await fetch('https://api.github.com/users/FarheenMalak')
    return response.json()
}