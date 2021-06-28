import classes from './Cart.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../Ui/Modal'
import CartItem from './CartItem'
const Cart = props => {
    const cartctx = useContext(CartContext)
    const totalAmount = `${cartctx.totalAmount.toFixed(2)}₹`
    const hasItems = cartctx.items.length > 0
    const cartItemRemoveHandler = id => {
        cartctx.removeItem(id)
     }
    const cartItemAddHandler = item => {
        cartctx.addItem({...item,amount:1})
     }
    const cartItems = <ul className={classes['cart-items']}>{cartctx.items.map((item) => (<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} ></CartItem>))}</ul>
    return <Modal>
        {cartItems}
        <div className={classes.total}>
            <span> total cost</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            {hasItems && <button className={classes.button}>order</button>}
        </div>
    </Modal>
}
export default Cart