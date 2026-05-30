import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../config/firebase";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="bg-white shadow-md px-8 py-5 flex justify-between items-center sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="text-3xl font-bold text-orange-500">Pizza Store</h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 text-lg font-semibold items-center">
        <Link to="/home" className="hover:text-orange-500">Home</Link>
        <Link to="/menu" className="hover:text-orange-500">Menu</Link>
        <Link to="/cart" className="hover:text-orange-500">Cart</Link>
        <Link to="/orders" className="hover:text-orange-500">Orders</Link>
        <button
          onClick={logout}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* HAMBURGER ICON — mobile only */}
      <button
        className="md:hidden text-3xl text-orange-500"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 text-2xl font-semibold">

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-5 right-8 text-4xl text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <Link to="/home" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Home</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Menu</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Cart</Link>
          <Link to="/orders" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Orders</Link>

          <button
            onClick={() => { setMenuOpen(false); logout(); }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg"
          >
            Logout
          </button>

        </div>
      )}

    </div>
  );
}

export default Navbar;