import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import pizza from "../assets/pizza.png";
import peri from "../assets/peri.jpg";
import mushroom from "../assets/mushroom.jpg";
import chicken from "../assets/chicken.jpg";

function Home() {

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  return (

    <div className="bg-[#fff8f0] min-h-screen">

      <Navbar />

      {/* HERO SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}

        <div>

          <h1 className="text-6xl font-bold text-[#1f1f1f] leading-tight">

           Welcome To

            <span className="text-orange-500">
              {" "}Pizza
            </span>

            <br />

            Store

          </h1>

          

          

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <img
            src={pizza}
            alt="pizza"
            className="w-[500px] h-[300px] hover:scale-105 transition duration-500"
          />

        </div>

      </div>

      {/* FEATURED SECTION */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <h1 className="text-4xl font-bold text-center mb-14">

           Pizzas

        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

            <img
              src={peri}
              alt="peri peri pizza"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <h1 className="text-2xl font-bold">
                Per Peri Tikka
              </h1>

              <p className="text-gray-500 mt-3">

                With Spicy and Cheesy.

              </p>

              <div className="flex justify-between items-center mt-6">

                <h2 className="text-orange-500 text-2xl font-bold">
                  ₹199
                </h2>

                <button
                  onClick={() => {

                    addToCart({
                      _id: 1,
                      name: "Peri Peri Tikka",
                      price: 199,
                      imageUrl: peri,
                      quantity: 1
                    });

                    navigate("/cart");

                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
                >
                  Add
                </button>

              </div>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

            <img
              src={mushroom}
              alt="mushroom pizza"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h1 className="text-2xl font-bold">
                Mushroom
              </h1>

              <p className="text-gray-500 mt-3">

                With Spicy and Cheesy.

              </p>

              <div className="flex justify-between items-center mt-6">

                <h2 className="text-orange-500 text-2xl font-bold">
                  ₹149
                </h2>

                <button
                  onClick={() => {

                    addToCart({
                      _id: 2,
                      name: "Mushroom",
                      price: 149,
                      imageUrl: mushroom,
                      quantity: 1
                    });

                    navigate("/cart");

                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
                >
                  Add
                </button>

              </div>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

            <img
              src={chicken}
              alt="chicken pizza"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              

              <h1 className="text-2xl font-bold">
                Chicken
              </h1>

              <p className="text-gray-500 mt-3">

                With Spicy and Cheesy.

              </p>

              <div className="flex justify-between items-center mt-6">

                <h2 className="text-orange-500 text-2xl font-bold">
                  ₹299
                </h2>

                <button
                  onClick={() => {

                    addToCart({
                      _id: 3,
                      name: "Chicken",
                      price: 299,
                      imageUrl: chicken,
                      quantity: 1
                    });

                    navigate("/cart");

                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
                >
                  Add
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Home;