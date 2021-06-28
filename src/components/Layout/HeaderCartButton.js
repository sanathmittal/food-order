import React,{useContext} from 'react'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'
import CartIcon from './CartIcon'
const HeaderCartButton = (props) => {
 const cartctx =useContext(CartContext);
 const numberOfCartItems=cartctx.items.reduce((curNumber,item)=>{
     return curNumber+item.amount;
 },0);
    return <buttton className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </buttton>
}
export default HeaderCartButton