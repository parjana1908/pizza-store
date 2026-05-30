import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import peri from "../assets/peri.jpg";
import mushroom from "../assets/mushroom.jpg";
import chicken from "../assets/chicken.jpg";
import four from"../assets/four.jpg";
import sicilian from"../assets/sicilian.jpg";
import mexican from"../assets/mexican.jpg";


function Menu() {

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");

  const pizzas = [

    {
      _id: 1,
      name: "Peri Peri Tikka",
      description: "With Spicy and Cheesy.",
      price: 199,
      imageUrl: peri,
      
      
    },

    {
      _id: 2,
      name: "Mushroom",
      description: "With Spicy and Cheesy.",
      price: 149,
      imageUrl: mushroom,
      
    },

    {
      _id: 3,
      name: "Chicken",
      description: "With Spicy and Cheesy.",
      price: 299,
      imageUrl: chicken,
      
    },

    {
      _id: 4,
      name: "Four Cheese",
      description: "With Spicy and Cheesy.",
      price: 199,
      imageUrl: four,
      
    },

    {
      _id: 5,
      name: "Sicilian",
      description: "With Spicy and Cheesy.",
      price: 249,
      imageUrl: sicilian,
      
    },

    {
      _id: 6,
      name: "Mexican",
      description: "With Spicy and Cheesy.",
      price: 299,
      imageUrl: mexican,
          }

  ];

  const filteredPizza = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="bg-[#fff8f0] min-h-screen">

      <Navbar />

      {/* TOP SECTION */}

      <div className="bg-orange-500 py-14 px-6 text-center">

        <h1 className="text-5xl font-bold text-white">

          Discover Your Perfect Pizza 🍕

        </h1>

        <p className="text-white mt-4 text-lg">

          Classic favorites and exciting new flavors in every bite.

        </p>

      </div>

      {/* SEARCH */}

      <div className="max-w-7xl mx-auto px-6 mt-10">

        <div className="flex justify-center">

          <input
            type="text"
            placeholder="Search Your Favorite Pizza..."
            className="w-full md:w-[500px] border-2 border-orange-300 rounded-2xl px-6 py-4 outline-none shadow-lg"
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* MENU GRID */}

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {
            filteredPizza.map((pizza) => (

              <div
                key={pizza._id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
              >

                {/* IMAGE */}

                <div className="overflow-hidden">

                  <img
                    src={pizza.imageUrl}
                    alt="pizza"
                    className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                  />

                </div>

                {/* CONTENT */}

                <div className="p-6">

                  

                  {/* TITLE */}

                  <h1 className="text-3xl font-bold mt-4">

                    {pizza.name}

                  </h1>

                  {/* DESCRIPTION */}

                  <p className="text-gray-500 mt-4 leading-7">

                    {pizza.description}

                  </p>

                  {/* PRICE + BUTTON */}

                  <div className="flex justify-between items-center mt-8">

                    <h2 className="text-orange-500 text-3xl font-bold">

                      ₹{pizza.price}

                    </h2>

                    <button
                      onClick={() => {

                        addToCart({
                          ...pizza,
                          quantity: 1
                        });

                        navigate("/cart");

                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-lg"
                    >
                      Add To Cart
                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );
}

export default Menu;