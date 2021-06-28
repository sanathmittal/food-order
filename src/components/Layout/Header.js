import React from'react'
import classes from './Header.module.css'
import foodimg from '../../assets/food.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header=(props)=>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ZippyMeals</h1>
       <HeaderCartButton onClick={props.onConfirm}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={foodimg} alt="table filled with food" ></img>
        </div>
    </React.Fragment>

};
export default Header;