import React from 'react'


const Home = () => {
  return (
   <div>
 <div className="bg-stone-800 h-screen w-full relative">
  <img src="https://images.pexels.com/photos/27389956/pexels-photo-27389956/free-photo-of-a-long-table-with-plates-and-silverware-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
  className="w-full h-full object-cover absolute mix-blend-overlay "/>

  <div className="flex items-center justify-center flex-col pt-28 text-white gap-3">
    <h1 className="font-bold text-3xl">Right Peoples Come To The Right Place</h1> 
    <p className="text-xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, consequatur qui asperiores animi.</p>
    <p className="text-xl" >Lorem ipsum dolor Officia accusamus aliquid tempora odio totam magnam voluptatem necessitatibus labore sequi illo.</p>
    <p className="text-xl" >Lorem ipsum dolor eius voluptatum consequuntur, porro cupiditate amet dolorem impedit accusamus nesciunt praesentium cumque, distinctio, hic ratione mollitia?</p>
  </div>
 </div>
  {/* <div className='w-screen'>
    <img src={img} alt=""  className='w-screen h-screen'/>
  </div> */}
   </div>
  )
}

export default Home
