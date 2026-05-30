import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import noorder from "../assets/no-order.png";

function Orders() {

  const { cart, cancelOrder } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#fff8f0] min-h-screen">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Your Orders 🍕
        </h1>

        {cart.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <img src={noorder} alt="No Orders" className="w-48 mx-auto mb-6" />
            <h2 className="text-3xl font-bold">No Orders Yet</h2>
            <p className="text-gray-500 mt-3">Your ordered pizzas will appear here.</p>
          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {/* LEFT SIDE */}
            <div className="md:col-span-2">

              {cart.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-3xl shadow-lg p-4 mb-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
                >

                  {/* IMAGE + DETAILS */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl flex-shrink-0"
                    />
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold">{item.name}</h2>
                      <p className="text-gray-500 mt-1">Quantity : {item.quantity}</p>
                      <p className="text-orange-500 text-lg font-bold mt-1">₹{item.price}</p>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex sm:flex-col gap-3 justify-end">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-center font-semibold text-sm">
                      Ordered
                    </div>
                    <button
                      onClick={() => {
                        const confirmDelete = window.confirm(
                          "Are you sure you want to cancel this order?"
                        );
                        if (confirmDelete) cancelOrder(item._id);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm"
                    >
                      Cancel Order
                    </button>
                  </div>

                </div>

              ))}

            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white rounded-3xl shadow-lg p-6 h-fit">

              <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Summary</h2>

              {cart.map((item) => (
                <div key={item._id} className="flex justify-between mb-4 text-sm md:text-base">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}

              <hr className="my-6" />

              <div className="flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-bold">Total</h3>
                <h3 className="text-2xl md:text-3xl font-bold text-orange-500">₹{total}</h3>
              </div>

              <div className="bg-green-100 rounded-2xl p-5 mt-8 text-center">
                <h2 className="text-lg md:text-2xl font-bold text-green-700">
                  🍕 Order Successfully Placed!
                </h2>
                <p className="mt-3 text-green-600 text-sm md:text-base">
                  Thank you for ordering from Pizza Palace.
                </p>
                <p className="text-green-600 mt-1 text-sm md:text-base">
                  Your delicious pizza is being prepared.
                </p>
              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Orders;