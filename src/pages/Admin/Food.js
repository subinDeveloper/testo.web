import React from 'react'
import data from '../../data/data'
import { Link } from 'react-router-dom'
const Food = () => {
  return (
    <div>
      <div>
        {
            data.map((item) => {
                return(
                    <div className='m-10'>
                        <Link to={`/admin/food/${item.id}`}>
                        <div>
                            <img src={item.image} alt="" className='h-40' />
                
                        </div>
                        <div>
                            <h1>{item.title}</h1>
                            <h1>{item.price}</h1>
                            
                        </div>
                        </Link>
                    </div>
                )
            })
        }
      </div>
    
    </div>
  )
}

export default Food
