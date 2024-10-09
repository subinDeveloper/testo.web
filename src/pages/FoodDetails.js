import React from 'react'
import { useParams,Link } from 'react-router-dom'
import {data} from '../data/data'

const FoodDetails = () => {
  const {id} = useParams()
  console.log(id);
  
  const food = data.find((item) => Number(item.id)===Number(id))
console.log(food);

  return (
    <div className=" flex justify-center items-center flex-col h-screen w-screen ">
      <img className="md:w-[600px] w-[400px]" src={food.image} alt="" />
      <h2 className="text-4xl">{food.title}</h2>
      <p>{food.description}</p>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam dolore officiis qui molestias dolorum, possimus molestiae animi, perspiciatis eum aperiam corrupti. Odio consequatur saepe, qui dolorem aliquid a eligendi vitae.
      </h1>
        <div>
     <Link to="/menu" >Back to menu</Link>
      </div>
    </div>
  )
}

export default FoodDetails
