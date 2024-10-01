import React from 'react'
import Layout from '../component/Layout'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='p-10 flex justify-center flex-col gap-2' >
      <div className="">
      <img src="https://media.istockphoto.com/id/1163284610/photo/very-stylish-indian-gourmet-restaurant.jpg?s=1024x1024&w=is&k=20&c=ev-6Z6pOo6_wl_ofm3AZ4wRILzcHeu5jMOiLRMskANU=" className='' alt="" />
        <h1 className="text-3xl font-bold">Discover Our Hotel.Our Passion for Hospitality</h1>
       <br></br>

       <p className="font-semibold">"Our Story": A simple and inviting title that encourages guests to learn more."Welcome to [Hotel Name]": A warm and personalized title that sets the tone for the page.Our History & Heritage": A title that conveys a sense of tradition and legacy.</p><br></br>
       <p className="font-semibold">"Our Passion for Hospitality": A title that conveys dedication and enthusiasm for guest satisfaction.</p>

      </div>
      
<div className="bg-yellow-300 py-11 p-6">
  <h1 className="text-2xl font-bold">Your Destination is waiting.Your Food is ready</h1>
  <div className="pt-3">
  <Link to="/Menu" className=" py-2 px-8 bg-black rounded-md text-white">Explore your planes</Link>
  </div>
</div>
     </div>
    </div>
  )
}

export default About
