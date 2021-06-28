import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import React from 'react'
import MealForm from './MealForm'
import classes from './MealItem.module.css'
const MealItem= (props)=>{
    const cartctx=useContext(CartContext)
    const price = `${props.price.toFixed(2)}₹`
    const addItemToCartHandler=amount=>{
  cartctx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
  })
    }
          return <li className={classes.meal}>
              <div><h3>{props.name}</h3>
              <div className={classes.description}>{props.description}</div>
              <div className={classes.price}>{price}</div></div>
      <div>
 <MealForm onAddToCart={addItemToCartHandler}></MealForm>
      </div>
          </li>
}
export default MealItem