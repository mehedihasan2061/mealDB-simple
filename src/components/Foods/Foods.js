import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Foods.css'

const Foods = () => {
  const [meals, setMeals] = useState([])
  const [cart,setCart]=useState([])
  console.log(cart);
  
    // console.log(meals)
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then(data =>setMeals(data ?.categories))
    }, [])
    
  const handleCart = (meal) => {
    console.log(meal);
    const newCart = [...cart, meal]
    setCart(newCart)
   }
    return (
                          
        <div className="container">
          <div className="food-container">
            {
              meals.map(meal => <Meal meal={meal}cart={cart} handleCart={handleCart} key={meal ?.idCategory}></Meal>)
            }
          </div>

          <div className="cart-container">
          <Cart cart={cart}></Cart>
          </div>
        </div>
      
    );
};

export default Foods;