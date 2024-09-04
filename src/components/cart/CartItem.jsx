import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCart";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching item:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (isLoading)
    return (
      <tr>
        <td colSpan="5" className="text-center p-4">
          Loading...
        </td>
      </tr>
    );
  if (isError)
    return (
      <tr>
        <td colSpan="5" className="text-center p-4 text-red-500">
          Error fetching item
        </td>
      </tr>
    );
  if (item == null) return null;

  return (
    <>
      <div>
        <tr className="border-b border-gray-200">
          <td className="p-4 flex items-center">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <span className="ml-4 text-lg font-medium">{item.title}</span>
          </td>
          <td className="p-4 text-center">{item.price}$</td>
          <td className="p-4 text-center">{quantity}</td>
          <td className="p-4 text-center">
            <div>Total</div>
            <div>{item.price * quantity}$</div>
          </td>
          <td className="p-4 text-center">
            <button
              className="text-red-500 hover:text-red-700 text-xl font-bold"
              onClick={() => removeFromCart(item.id)}
            >
              <MdDeleteOutline size={30} />
            </button>
          </td>
        </tr>
      </div>
    </>
  );
};

export default CartItem;
