import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function PizzaCard({ pizza }) {

  const { addToCart } = useContext(CartContext);

  return (

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">

      <img
        src={pizza.imageUrl}
        alt="pizza"
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <h1 className="text-2xl font-bold">
          {pizza.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {pizza.description}
        </p>

        <div className="flex justify-between items-center mt-5">

          <h2 className="text-orange-500 text-2xl font-bold">
            ₹{pizza.price}
          </h2>

          <button
            onClick={() => addToCart(pizza)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>

  );
}

export default PizzaCard;