import React from 'react'
import { Link } from 'react-router-dom'
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
<Link to="/branchers">Branches</Link>

      
<Link to="/about">About</Link>
      <Link to="explore">Explore</Link>
      <Link to="/menu">Menu</Link>
     
</div>
    </div>
  )
}

export default Navbar
