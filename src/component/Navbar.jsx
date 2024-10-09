import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
const Navbar = () => {
const[extendNavbar,setExtendNavbar] = useState(false)
// console.log(extendNavbar);

  return (
    <div className={`flex justify-between bg-blue-200 sm:px-10 duration-500 lg:h-28 md:px-20 ${extendNavbar ? "h-72" : " h-28"}`}>
     <div className="flex items-center gap-80">
     <div className="text-4xl font-semibold flex items-center gap-4">
     <img src="https://cdn-icons-png.flaticon.com/512/2558/2558214.png" className="sm w-24" alt="" />
     
      <Link to="/" className="font-serif flex " >
      TESTO</Link>
      
      </div>
      <div className=" lg:hidden" onClick={() => {setExtendNavbar(open => !open)}}>
        {
          extendNavbar ? <ClearIcon/> : <MenuIcon/>
        }
        

 </div>
     </div>
    
<div className={`text-2xl font-semibold items-center gap-6 flex flex-col lg:flex-row absolute top-5 lg:static duration-500 ${extendNavbar ? "right-10" : "right-[-100px] top-[-100px]"}`} >
      <NavLink  to="/branchers">Branches</NavLink>
      <NavLink  to="/about">About</NavLink>
      <NavLink  to="explore">Explore</NavLink>
      <NavLink  to="/menu">Menu</NavLink>
      <NavLink  to="/admin">Admin</NavLink>
     
</div>
    </div>
  )
}

export default Navbar
