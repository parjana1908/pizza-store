import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import emptycart from "../assets/empty-cart.png";
import auth from "../config/firebase";

function Cart() {

  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty
  } = useContext(CartContext);

  // TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // PLACE ORDER
  const placeOrder = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first!");
      return;
    }

    try {
      const res = await fetch("https://pizza-store-p0r0.onrender.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.uid,
          items: cart,
          totalAmount: total,
          deliveryAddress: "No address"
        })
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/orders");
      } else {
        alert(data.message || "Something went wrong!");
      }

    } catch (error) {
      alert("Server not reachable. Is backend running?");
    }
  };

  return (

    <div className="bg-[#fff8f0] min-h-screen">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TITLE */}

        <h1 className="text-5xl font-bold mb-12">
          Shopping Cart 🛒
        </h1>

        {
          cart.length === 0 ? (

            <div className="flex flex-col items-center justify-center mt-20">

              <img
                src={emptycart}
                alt="empty"
                className="w-[250px]"
              />

              <h1 className="text-3xl font-bold mt-8">
                Your Cart is Empty 🍕
              </h1>

            </div>

          ) : (

            <div className="grid md:grid-cols-3 gap-10">

              {/* LEFT */}
              <div className="md:col-span-2">

                {cart.map((item) => (

                  <div
                    key={item._id}
                    className="bg-white rounded-3xl shadow-lg p-5 flex flex-col md:flex-row justify-between items-center gap-5 mb-6"
                  >

                    {/* IMAGE + DETAILS */}
                    <div className="flex items-center gap-5">

                      <img
                        src={item.imageUrl}
                        alt="pizza"
                        className="w-32 h-32 rounded-2xl object-cover"
                      />

                      <div>
                        <h1 className="text-2xl font-bold">{item.name}</h1>
                        <p className="text-gray-500 mt-2">Delicious cheesy pizza</p>
                        <h2 className="text-orange-500 text-2xl font-bold mt-3">₹{item.price}</h2>
                      </div>

                    </div>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-4">

                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full text-xl"
                      >
                        -
                      </button>

                      <h1 className="text-2xl font-bold">{item.quantity}</h1>

                      <button
                        onClick={() => increaseQty(item._id)}
                        className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full text-xl"
                      >
                        +
                      </button>

                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"
                    >
                      Remove
                    </button>

                  </div>

                ))}

              </div>

              {/* RIGHT SIDE PAYMENT */}
              <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-28">

                <h1 className="text-3xl font-bold mb-8">Order Summary</h1>

                {/* ITEMS */}
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item._id} className="flex justify-between">
                      <h2 className="text-gray-600">{item.name} x {item.quantity}</h2>
                      <h2 className="font-bold">₹{item.price * item.quantity}</h2>
                    </div>
                  ))}
                </div>

                {/* TOTAL */}
                <div className="border-t mt-8 pt-6 flex justify-between items-center">
                  <h1 className="text-3xl font-bold">Total</h1>
                  <h2 className="text-orange-500 text-3xl font-bold">₹{total}</h2>
                </div>

                {/* PAYMENT BUTTON */}
                <button
                  onClick={placeOrder}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl mt-10 text-xl font-bold shadow-lg"
                >
                  Proceed To Order
                </button>

              </div>

            </div>

          )
        }

      </div>

    </div>

  );
}

export default Cart;