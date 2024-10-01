import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <div className="flex justify-between h-28 bg-blue-200 sm:px-10 md:px-20">
     <div className="flex items-center gap-80">
     <div className="text-4xl font-semibold flex items-center gap-4">
     <img src="https://cdn-icons-png.flaticon.com/512/2558/2558214.png" className="sm w-24" alt="" />
     
      <Link to="/" className="font-serif">TESTO</Link>
      
      </div>
      <div className="md:hidden text-2xl">
  <MenuIcon/>
 </div>
     </div>
     {/* right */}
<div className="text-2xl font-semibold gap-4 flex items-center hidden md:flex">
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
