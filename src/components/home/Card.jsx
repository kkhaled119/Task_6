import React, { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCart";

const Card = ({ item }) => {
  const { getItemsQuantity, addToCart, removeFromCart } = useShoppingCart();
  const quantity = getItemsQuantity(item.id);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    addToCart(item.id);
    setMessage("Added to cart!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="hover:scale-105 transform transition duration-300 ease-out shadow-lg rounded-lg p-4">
      <div className="relative h-80 w-80">
        <img
          src={item.images}
          alt={item.title}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>

      <h3 className="text-xl mt-3 font-sans">{item.title}</h3>
      <h1 className="text-lg font-bold">{item.price}$</h1>

      <button
        onClick={handleAddToCart}
        className="mt-2 py-2 px-10 bg-black text-white rounded-lg"
      >
        Add To Cart
      </button>

      {message && (
        <div className="mt-2 text-green-500 font-medium">{message}</div>
      )}
    </div>
  );
};

export default Card;
