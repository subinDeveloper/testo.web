import React, { useState } from 'react'
import data from '../data/data'
import { Link } from 'react-router-dom'
import Searchbar from '../component/Searchbar'

const Menu = () => {
  const[searchTerm,setSearchTerm] = useState("")
  return (
    <div className="w-screen my-5 flex flex-col items-center">
      <Searchbar setSearchTerm={setSearchTerm}/>
      <h1 className="text-4xl font-bold underline pt-6 p-10">Eplore Our Food</h1>
      <div className="flex justify-center flex-wrap gap-3 ">
        
      {
        data && data.filter((item)=>{
          return searchTerm.toLowerCase() === "" ? item : item.title.toLowerCase().includes(searchTerm)
        })
        .map((item)=>{
          return(
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
              <Link to={`/menu/${item.id}`}>
              <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{item.title}</h2>
                <p className="dark:text-gray-800">{item.description}</p>
                <h3>{item.price}</h3>
              </div>
              <div className="flex items-center justify-center ">
              <button type="button" className=" px-2 py-2 font-semibold tracking-wide  rounded-md bg-black text-white">Read more</button>
           
              </div>
               </div>
            </Link>
           
          </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Menu
