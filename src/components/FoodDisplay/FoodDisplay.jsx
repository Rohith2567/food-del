import React, { useContext, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
 
    const {food_list} = useContext(StoreContext)

    return (
      <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item,index)=>{
              if ( ( (category=== "All" || category===item.category ) &&  hotel==="Every" ) || hotel==item.h_id) {
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>    
              }
              // else if(hotel===item.h_id) {
              //   return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>    
              // }
              
          })} 
        </div>
      </div>
    )
}

export default FoodDisplay
