import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div  >
 <div className="bg-black text-white h-20 flex  items-center justify-center w-screen gap-20 ">
      <NavLink className={({isActive}) => isActive ? "underline " : "" }  to=".">Dashboard</NavLink>
      <NavLink className={({isActive}) => isActive ? "underline " : "" }   to="income">Income</NavLink>
      <NavLink className={({isActive}) => isActive ? "underline " : "" }  to="review">Review</NavLink>
      <NavLink className={({isActive}) => isActive ? "underline " : "" }  to="food">Food</NavLink>
 </div>
 <Outlet/>
    </div>
  )
}

export default AdminLayout
