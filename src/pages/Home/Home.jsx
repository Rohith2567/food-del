import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import ExploreHotel from '../../components/ExploreHotel/ExploreHotel'
import { StoreContext } from '../../context/StoreContext'

const Home = () => {

    const {hotel,sethotel} = useContext(StoreContext)

     const [category,setcategory] = useState("All");

    //  const [hotel,sethotel] = useState("Every");

  return (
    <div>
      <Header />
      <ExploreHotel hotel={hotel} sethotel={sethotel}/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category} hotel={hotel}/>
      <AppDownload />
    </div>
  )
}

export default Home
