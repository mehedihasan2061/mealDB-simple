import React from 'react';
import './Meal.css'

const Meal = ({ meal, handleCart }) => {
  
   
    const { strCategory, strCategoryThumb, strCategoryDescription } = meal;
    return (
      <div className="meal-category">
        <img src={strCategoryThumb} alt="" />
        <div className="text">
          <h2> {strCategory}</h2>
          <p>{strCategoryDescription?.slice(0, 50)}...</p>
        </div>
        <button className='cart-btn' onClick={()=>handleCart (meal)} >Add to Cart</button>
      </div>
    );
};

export default Meal;