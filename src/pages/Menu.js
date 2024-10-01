import React from 'react'
import Layout from '../component/Layout'
import data from '../data/data'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold underline pt-6 p-10">Eplore Our Food</h1>
      <div className="flex justify-center flex-wrap gap-3 ">
        
      {
        data.map((item)=>{
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
              <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
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
