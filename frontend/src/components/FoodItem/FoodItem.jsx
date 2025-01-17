import React, { useContext, useEffect } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
// import Aos from 'aos'
// import 'aos/dist/aos.css'

import ScrollAnimation from 'react-animate-on-scroll';



const FoodItem = ({ id, name, price, description, image }) => {

  // useEffect(()=>{
  //   Aos.init({offset: 0, once: true,  disable: 'phone', duration: 300,
  //   initClassName: 'aos-init',
  //   animatedClassName: 'aos-animate',
  //   useClassNames: false,
  //   disableMutationObserver: false,
  //   debounceDelay: 0,
  //   throttleDelay: 0,
  //   });
  // },[]) 

  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

  return (
    <ScrollAnimation animateIn="fadeInRight" animateOnce = "true">
      <div className='food-item fadeInRight'   > {/*data-aos = "fade-left"  fadeInRight*/}
        <div className="food-item-img-container">
          <img className='food-item-image' src={url+"/images/"+image} alt="" />
          {!cartItems[id]
            ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className='food-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </ScrollAnimation>

  )
}

export default FoodItem
