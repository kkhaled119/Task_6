import React, { useEffect, useState } from "react";

const BestSalling = () => {
  // Initialize product as an empty array
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        const firstFourProduct = data.slice(10, 14);
        setProduct(firstFourProduct);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="pt-4 pb-10">
      <small className="text-red-500 font-medium">This month</small>
      <h2 className="text-3xl font-semibold">Best Selling Products</h2>
      <div className="product flex">
        {product.map((item) => (
          <div
            key={item.id}
            className="hover:scale-105 transform transition duration-300 ease-out shadow-lg rounded-lg p-4 no-scrollbar"
          >
            <div className="relative h-80 w-80">
              <img
                src={item.images[0]}
                alt={item.title}
                className="object-cover w-full h-full rounded-t-lg"
              />
            </div>
            <h3 className="text-xl mt-3 font-sans">{item.title}</h3>
            <h1 className="text-lg font-bold">{item.price}$</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSalling;
