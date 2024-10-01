import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="flex  text-xl font-serif justify-center gap-28 w-full h-full" >
 <div className="flex jsutify-center gap-4">
 <div className="flex flex-col">
 <NavLink className={({isActive}) => isActive ? "underline " : "" }  to=".">Dashboard</NavLink></div>

 <NavLink className={({isActive}) => isActive ? "underline " : "" }   to="income">Income</NavLink>
      <NavLink className={({isActive}) => isActive ? "underline " : "" }  to="review">Review</NavLink>
      <NavLink className={({isActive}) => isActive ? "underline " : "" }  to="food">Food</NavLink>
      <Outlet/>
 </div>

       
    </div>
  )
}

export default AdminLayout
