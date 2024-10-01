import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <div>
   
  <div className="h-full">
    <img src="https://images.pexels.com/photos/27389956/pexels-photo-27389956/free-photo-of-a-long-table-with-plates-and-silverware-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='relative w-screen brightness-50' />
    <div className=" flex justify-center items-center  flex-col lg:pt-20 lg:gap-6 absolute md:top-56 lg:top-96 top-40 text-white px-20">
        <h1 className="lg:text-6xl text-2xl font-semibold text-center underline">Right Peoples Come To The Right Place</h1>
       
        <p className="lg:text-xl text-md font-bold text-center">Exceptional Service: Friendly, attentive, and personalized service from staff.Cleanliness and Hygiene: Impeccable cleanliness, sanitation, and hygiene standards.
        Safety and Security: Robust security measures, secure parking, and in-room safes.
       </p>
       
        <div className="flex justify-center py-4">
      <Link to="/branchers" className="rounded-lg px-8 py-2 bg-black text-white">Find your plan</Link>
      </div>
        
      </div>
  </div>
   </div>
  )
}

export default Home
