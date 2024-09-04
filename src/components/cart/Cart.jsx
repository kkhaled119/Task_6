import React from "react";
import { useShoppingCart } from "../../context/ShoppingCart";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
