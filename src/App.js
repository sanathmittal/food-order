import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'
import CartProvider from "./store/CartProvider";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);

const showCartHandler=()=>{
  setCartIsShown(true)
}
const closeCartHandler=()=>{
  setCartIsShown(false)
}

  return (
   <CartProvider>
    {cartIsShown&& <Cart onClose={closeCartHandler}></Cart> }   
      <Header onConfirm={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
      </CartProvider>
  );
}

export default App;
