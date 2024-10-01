import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/data'
import { Link } from 'react-router-dom'
const AdminFoodDetails = () => {
    const {id} = useParams()
    console.log(id);
    
    const food = data.find((item) => Number(item.id) === Number(id))
console.log(food);

  return (
    <div >
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>
      <div className="m-5">
        <Link to="/admin/food" className="text-2xl text-white bg-black px-6 py-2">Back to menu</Link>
      </div>
    </div>
  )
}

export default AdminFoodDetails
