import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {

    const existing = cart.find(
      (item) => item._id === pizza._id
    );

    if (existing) {

      setCart(
        cart.map((item) =>
          item._id === pizza._id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...pizza,
          quantity: 1
        }
      ]);

    }

  };

  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item._id !== id)
    );

  };

  const increaseQty = (id) => {

    setCart(
      cart.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };

  const decreaseQty = (id) => {

    setCart(
      cart.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1
            }
          : item
      )
    );

  };

  const cancelOrder = (id) => {

    setCart(
      cart.filter((item) => item._id !== id)
    );

  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        cancelOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );

};